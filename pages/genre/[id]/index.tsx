/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import Head from 'next/head'
import type {
    GetStaticPaths,
    GetStaticProps,
    InferGetStaticPropsType,
} from 'next'
import { useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { ParsedUrlQuery } from 'querystring'
import MovieCardItems from '@/pages/movie/components/MovieCardItems'
import MovieButtonBack from '@/pages/movie/components/MovieButtonBack'
import fetchAllGenreMovie from '@/lib/movie/fetchAllGenreMovie'
import fetchGenreMovie from '@/lib/movie/fetchGenreMovie'
import InfiniteScroll from 'react-infinite-scroll-component'

type DetailGenreProps = { movies: Movies[]; movie_id: string }
type PropsMovieItems = { items: Movies[]; fetchMoreData: any }
type MoviesProps = { title: string; items: Movies[]; fetchMoreData: any }

interface Params extends ParsedUrlQuery {
    id: string
}

export const getStaticPaths: GetStaticPaths = async () => {
    const genres: Genres[] = await fetchAllGenreMovie()
    const paths = genres?.map((genre) => ({
        params: { id: genre.parameter.toString() },
    }))

    return { paths, fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps<DetailGenreProps> = async ({
    params,
}) => {
    const { id } = params as Params
    const movies: Movies[] = await fetchGenreMovie(id)
    const movie_id: string = id

    if (!movies) return { notFound: true }

    return { props: { movies, movie_id } }
}

export const MoviesItems = ({ items, fetchMoreData }: PropsMovieItems) => {
    return (
        <Row className="justify-content-start g-2 py-3">
            <Col>
                <InfiniteScroll
                    dataLength={items?.length}
                    next={fetchMoreData}
                    hasMore={true}
                    loader={
                        <div className="d-flex justify-content-center mx-auto py-5 text-white-50">
                            {items.length ? 'Sedang Memuat...' : null}
                        </div>
                    }
                    style={{ overflow: 'hidden' }}
                >
                    <div className="row row-cols-2 row-cols-lg-6 row-cols-md-3 justify-content-arround g-3">
                        {items?.map((item, index) => (
                            <div key={index} className="col">
                                <MovieCardItems items={item} />
                            </div>
                        ))}
                    </div>
                </InfiniteScroll>
            </Col>
        </Row>
    )
}

export const MovieHeading = () => {
    return (
        <Row className="justify-content-start g-2 py-3">
            <Col>
                <Card
                    style={{
                        backgroundColor: '#0f0f0f',
                        borderRadius: '0',
                    }}
                >
                    <Card.Body>
                        <MovieButtonBack />
                        <hr className="text-white-50" />
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export const Movies = ({ title, items, fetchMoreData }: MoviesProps) => {
    const [genreTitle, setGenreTitle] = useState(
        `Kumpulan Film ${title} Terbaru dan Terlengkap`
    )

    return (
        <Row className="justify-content-start g-2 py-3">
            <Col>
                <Card
                    style={{
                        backgroundColor: '#0f0f0f',
                        borderRadius: '0',
                    }}
                >
                    <Card.Body>
                        <Card.Title className="text-white text-uppercase text-wrap mb-3">
                            {genreTitle}
                        </Card.Title>
                        <hr className="text-white-50" />
                        <MoviesItems
                            items={items}
                            fetchMoreData={fetchMoreData}
                        />
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default function DetailGenre({
    movies: initialMovies,
    movie_id,
}: InferGetStaticPropsType<typeof getStaticProps>) {
    const [movies, setMovies] = useState(initialMovies)
    const [page, setPage] = useState<number>(1)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [title, setTitle] =
        useState<string>(`Kumpulan Film ${movie_id} Terbaru dan Terlengkap
                                    `)

    const fetchMoreData = async () => {
        const api: string = 'http://localhost:5000'
        const endpoint: string = `genres/${movie_id}`
        const response: Response = await fetch(
            `${api}/${endpoint}?page=${page}`
        )

        const newMovies: Movies[] = await response.json()

        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
            setMovies([...movies, ...newMovies])
            setPage(page + 1)
        }, 1000)
    }

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Container className="position-relative py-5 pt-5 mt-5">
                <MovieHeading />
                <Movies
                    title={movie_id}
                    items={movies}
                    fetchMoreData={fetchMoreData}
                />
            </Container>
        </>
    )
}
