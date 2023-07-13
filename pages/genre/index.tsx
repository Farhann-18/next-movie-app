/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import Head from 'next/head'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import MovieButtonBack from '../movie/components/MovieButtonBack'
import MovieCardItems from '../movie/components/MovieCardItems'
import InfiniteScroll from 'react-infinite-scroll-component'
import fetchAllMovie from '@/lib/movie/fetchAllMovie'
import fetchAllGenreMovie from '@/lib/movie/fetchAllGenreMovie'
import MovieItemsListInfiniteScroll from '../movie/components/MovieItemsListInfiniteScroll'

type GenreProps = { genres: Genres[]; movies: Movies[] }

type MoviesGenreProps = {
    paramater: string
    isLoading: any
    setIsLoading: any
    count: number
}

type MovieHeadingProps = {
    children: React.ReactNode
}

type MovieGenreButtonProps = {
    genres: Genres[]
    setIsLoading: any
    setParameter: any
    parameter: any
    setCount: any
}

export const Movies = ({
    paramater,
    isLoading,
    setIsLoading,
    count,
}: MoviesGenreProps) => {
    const [items, setItems] = useState<Movies[]>([])
    const [newItems, setNewItems] = useState<Movies[]>([])
    const [page, setPage] = useState<number>(1)

    useEffect(() => {
        const fetchData = async () => {
            const api: string = 'http://localhost:5000'
            const endpoint: string = `genres/${paramater}`
            const response: Response = await fetch(`${api}/${endpoint}`)
            const genresMovie: Movies[] = await response.json()

            window.scrollTo({ top: 0, behavior: 'smooth' })

            setIsLoading(true)

            setTimeout(() => {
                setIsLoading(false)
                setItems(genresMovie)
            }, 500)
        }

        fetchData()
    }, [paramater, setIsLoading])

    const fetchMoreData = async () => {
        const api: string = 'http://localhost:5000'
        const endpoint: string = `genres/${paramater}`
        const response: Response = await fetch(
            `${api}/${endpoint}?page=${page}`
        )

        const newItems: Movies[] = await response.json()

        setTimeout(() => {
            setItems([...items, ...newItems])
            setPage(page + 1)
        }, 300)
    }

    return (
        <Row className="justify-content-start  g-2">
            <Col>
                <Card
                    body
                    style={{
                        backgroundColor: '#0f0f0f',
                        borderRadius: '0',
                    }}
                >
                    <>
                        <Card.Title className="text-white text-uppercase text-wrap mb-3">
                            {count >= 1000 ? `${count} RIBU` : count} Film Dari
                            Genre {paramater} Terbaru dan Terlengkap
                        </Card.Title>

                        <hr className="text-white-50" />

                        {isLoading ? (
                            <div className="text-white-50">
                                Sedang memuat...
                            </div>
                        ) : (
                            <MovieItemsListInfiniteScroll
                                items={items}
                                fetchMoreData={fetchMoreData}
                            />
                        )}
                    </>
                </Card>
            </Col>
        </Row>
    )
}

export const MovieGenreButton = ({
    genres,
    setIsLoading,
    setParameter,
    parameter,
    setCount,
}: MovieGenreButtonProps) => {
    return (
        <Card
            body
            data-bs-spy="scroll"
            data-bs-smooth-scroll="true"
            className="position-relative mb-3"
            style={{
                width: '100%',
                height: 'auto',
                minHeight: '500px',
                overflowY: 'auto',
                backgroundColor: '#0f0f0f',
                borderRadius: '0',
            }}
        >
            <Card.Title className="text-white text-start text-uppercase text-wrap mb-3">
                Pilih Berdasarkan Daftar Genre
            </Card.Title>
            <hr className="text-white-50" />
            {genres?.map((genre, index) => (
                <button
                    key={index}
                    onClick={() =>
                        setTimeout(() => {
                            setIsLoading(true)
                            setParameter(genre?.parameter)
                            setCount(genre?.numberOfContents)
                        }, 300)
                    }
                    type="button"
                    className="btn btn-outline-dark btn-md rounded text-white-50 text-center me-2 mb-3 d-block w-100"
                    disabled={genre?.parameter === parameter}
                >
                    {genre?.name}
                </button>
            ))}
        </Card>
    )
}

export const MovieHeading = ({ children }: MovieHeadingProps) => {
    return (
        <>
            <Row className="justify-content-start pt-3">
                <Col>{children}</Col>
            </Row>
        </>
    )
}

export default function Genre({
    genres: initialGenres,
    movies,
}: InferGetStaticPropsType<typeof getStaticProps>) {
    const [parameter, setParameter] = useState<string>(
        initialGenres[0]['parameter']
    )
    const [count, setCount] = useState<number>(
        initialGenres[0]['numberOfContents']
    )
    const [genres, setGenres] = useState(initialGenres)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    return (
        <>
            <Container className="position-relative py-5">
                <MovieHeading>
                    <MovieButtonBack />
                    <hr className="text-white-50" />
                </MovieHeading>

                <Row className="justify-content-arround g-2">
                    <Col lg={3} className="d-none d-lg-block">
                        <MovieGenreButton
                            genres={genres}
                            setIsLoading={setIsLoading}
                            setParameter={setParameter}
                            parameter={parameter}
                            setCount={setCount}
                        />
                    </Col>
                    <Col lg={9}>
                        <Movies
                            paramater={parameter}
                            isLoading={isLoading}
                            setIsLoading={setIsLoading}
                            count={count}
                        />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export const getStaticProps: GetStaticProps<GenreProps> = async () => {
    const genres: Genres[] = await fetchAllGenreMovie()
    const movies: Movies[] = await fetchAllMovie()

    return { props: { genres, movies }, revalidate: 60 }
}
