/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import { ReactElement, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import fetchAllMovie from '@/lib/movie/fetchAllMovie'
import InfiniteScroll from 'react-infinite-scroll-component'
import MovieCardItems from './components/MovieCardItems'
import MovieButtonBack from './components/MovieButtonBack'
import fetchLatestMovie from '@/lib/movie/fetchLatestMovie'
import fetchPopularMovie from '@/lib/movie/fetchPopularMovie'
import fetchTrendingMovie from '@/lib/movie/fetchTrendingMovie'
import MovieItemsListInfiniteScroll from './components/MovieItemsListInfiniteScroll'
import dynamic from 'next/dynamic'
import MainLayout from '@/layouts/MainLayout'

const MovieButton = dynamic(() => import('./components/MovieButton'), {
    ssr: false,
})

type PropsMovieItems = { items: Movies[]; fetchMoreData: any }

type MovieHeadingProps = {
    children: React.ReactNode
}

export const MovieItems = ({ items, fetchMoreData }: PropsMovieItems) => {
    return (
        <InfiniteScroll
            dataLength={items?.length}
            next={fetchMoreData}
            hasMore={true}
            loader={
                <div className="d-flex justify-content-center mx-auto py-5 text-white-50">
                    Sedang Memuat...
                </div>
            }
            style={{ overflow: 'hidden' }}
        >
            <div className="row row-cols-2 row-cols-lg-6 justify-content-arround g-3">
                {items?.map((item, index) => (
                    <div key={index} className="col">
                        <MovieCardItems items={item} />
                    </div>
                ))}
            </div>
        </InfiniteScroll>
    )
}

export const MovieHeading = ({ children }: MovieHeadingProps) => {
    return (
        <Row className="justify-content-start g-2 py-3">
            <Col>
                <Card
                    style={{
                        backgroundColor: '#0f0f0f',
                        borderRadius: '0',
                    }}
                >
                    <Card.Body>{children}</Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export const IsMovies = ({ items: initialItems }: MoviesProps) => {
    const [items, setItems] = useState(initialItems)
    const [page, setPage] = useState<number>(1)

    const fetchMoreData = async () => {
        const api: string = 'http://localhost:5000'
        const endpoint: string = 'movies'
        const response: Response = await fetch(
            `${api}/${endpoint}?page=${page}`
        )

        const newItems: Movies[] = await response.json()

        setTimeout(() => {
            setItems([...items, ...newItems])
            setPage(page + 1)
            window.scrollTo({ behavior: 'smooth' })
        }, 300)
    }

    return (
        <Row className="justify-content-start g-2 py-3">
            <Col>
                <Card
                    body
                    style={{
                        backgroundColor: '#0f0f0f',
                        borderRadius: '0',
                    }}
                >
                    <Card.Title className="text-white text-uppercase text-wrap mb-3">
                        Semua Film Terbaru dan Terlengkap
                    </Card.Title>
                    <hr className="text-white-50" />
                    <MovieItemsListInfiniteScroll
                        items={items}
                        fetchMoreData={fetchMoreData}
                    />
                </Card>
            </Col>
        </Row>
    )
}

type MoviesProps = { items: Movies[] }

export const PopularMovies = ({ items: initialItems }: MoviesProps) => {
    const [items, setItems] = useState(initialItems)
    const [page, setPage] = useState<number>(1)

    const fetchMoreData = async () => {
        const api: string = 'http://localhost:5000'
        const endpoint: string = 'popular/movies'
        const response: Response = await fetch(
            `${api}/${endpoint}?page=${page}`
        )

        const newItems: Movies[] = await response.json()

        setTimeout(() => {
            setItems([...items, ...newItems])
            setPage(page + 1)
            window.scrollTo({ behavior: 'smooth' })
        }, 300)
    }

    return (
        <Row className="justify-content-start g-2 py-3">
            <Col>
                <Card
                    body
                    style={{
                        backgroundColor: '#0f0f0f',
                        borderRadius: '0',
                    }}
                >
                    <Card.Title className="text-white text-uppercase text-wrap mb-3">
                        Kumpulan Film Populer Terbaru dan Terlengkap
                    </Card.Title>
                    <hr className="text-white-50" />
                    <MovieItemsListInfiniteScroll
                        items={items}
                        fetchMoreData={fetchMoreData}
                    />
                </Card>
            </Col>
        </Row>
    )
}

export const TrendingMovies = ({ items: initialItems }: MoviesProps) => {
    const [items, setItems] = useState(initialItems)
    const [page, setPage] = useState<number>(1)

    const fetchMoreData = async () => {
        const api: string = 'http://localhost:5000'
        const endpoint: string = 'top-rated/movies'
        const response: Response = await fetch(
            `${api}/${endpoint}?page=${page}`
        )

        const newItems: Movies[] = await response.json()

        setTimeout(() => {
            setItems([...items, ...newItems])
            setPage(page + 1)
            window.scrollTo({ behavior: 'smooth' })
        }, 300)
    }

    return (
        <Row className="justify-content-start g-2 py-3">
            <Col>
                <Card
                    body
                    style={{
                        backgroundColor: '#0f0f0f',
                        borderRadius: '0',
                    }}
                >
                    <Card.Title className="text-white text-uppercase text-wrap mb-3">
                        Kumpulan Film Trending Terbaru dan Terlengkap
                    </Card.Title>
                    <hr className="text-white-50" />
                    <MovieItemsListInfiniteScroll
                        items={items}
                        fetchMoreData={fetchMoreData}
                    />
                </Card>
            </Col>
        </Row>
    )
}

export const LatestMovies = ({ items: initialItems }: MoviesProps) => {
    const [items, setItems] = useState(initialItems)
    const [page, setPage] = useState<number>(1)

    const fetchMoreData = async () => {
        const api: string = 'http://localhost:5000'
        const endpoint: string = 'recent-release/movies'
        const response: Response = await fetch(
            `${api}/${endpoint}?page=${page}`
        )

        const newItems: Movies[] = await response.json()

        setTimeout(() => {
            setItems([...items, ...newItems])
            setPage(page + 1)
            window.scrollTo({ behavior: 'smooth' })
        }, 300)
    }

    return (
        <Row className="justify-content-start g-2 py-3">
            <Col>
                <Card
                    body
                    style={{
                        backgroundColor: '#0f0f0f',
                        borderRadius: '0',
                    }}
                >
                    <Card.Title className="text-white text-uppercase text-wrap mb-3">
                        Kumpulan Film Terbaru dan Terlengkap
                    </Card.Title>
                    <hr className="text-white-50" />
                    <MovieItemsListInfiniteScroll
                        items={items}
                        fetchMoreData={fetchMoreData}
                    />
                </Card>
            </Col>
        </Row>
    )
}

const Page = ({
    movies,
    latests,
    popular,
    trending,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
    // Set Button Action
    const [isMovies, setIsMovies] = useState<boolean>(true) // Set Default True
    const [isLatestMovies, setIsLatestMovies] = useState<boolean>(false)
    const [isPopularMovies, setIsPopularMovies] = useState<boolean>(false)
    const [isTrendingMovies, setIsTrendingMovies] = useState<boolean>(false)

    return (
        <>
            <Container>
                <MovieHeading>
                    <MovieButtonBack />
                    <hr className="text-white-50" />
                    <MovieButton
                        isMovies={isMovies}
                        setIsMovies={setIsMovies}
                        isLatestMovies={isLatestMovies}
                        setIsLatestMovies={setIsLatestMovies}
                        isPopularMovies={isPopularMovies}
                        setIsPopularMovies={setIsPopularMovies}
                        isTrendingMovies={isTrendingMovies}
                        setIsTrendingMovies={setIsTrendingMovies}
                    />
                </MovieHeading>

                {isPopularMovies ? (
                    <PopularMovies items={popular} />
                ) : isTrendingMovies ? (
                    <TrendingMovies items={trending} />
                ) : isLatestMovies ? (
                    <LatestMovies items={latests} />
                ) : (
                    <IsMovies items={movies} />
                )}
            </Container>
        </>
    )
}

Page.getLayout = function getLayout(page: ReactElement) {
    return <MainLayout>{page}</MainLayout>
}

export const getStaticProps: GetStaticProps = async () => {
    const movies: Promise<Movies[]> = await fetchAllMovie()
    const latests: Promise<Movies[]> = await fetchLatestMovie()
    const popular: Promise<Movies[]> = await fetchPopularMovie()
    const trending: Promise<Movies[]> = await fetchTrendingMovie()

    return { props: { movies, latests, popular, trending }, revalidate: 60 }
}

export default Page
