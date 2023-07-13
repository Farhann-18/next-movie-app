/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { ReactElement, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import fetchTrendingMovie from '@/lib/movie/fetchTrendingMovie'
import fetchAllMovie from '@/lib/movie/fetchAllMovie'
import MovieCardItems from './movie/components/MovieCardItems'
import fetchPopularMovie from '@/lib/movie/fetchPopularMovie'
import fetchLatestMovie from '@/lib/movie/fetchLatestMovie'
import fetchMovieWithYear from '@/lib/movie/fetchMovieWithYear'
import MainLayout from '@/layouts/MainLayout'

type HomeProps = {
    movies: Movies[]
    latestsMovies: Movies[]
    popularMovies: Movies[]
    trendingMovies: Movies[]
    moviesWithYears: GetYears[]
}

type MoviesWithYearsProps = { items: GetYears[] }

type TrendingMoviesProps = { items: Movies[] }

type latestsMoviesProps = { items: HomeProps['latestsMovies'] }

type NowPlayingMoviesProps = { items: Movies[] }

type PopularMoviesProps = { items: HomeProps['popularMovies'] }

export const LatestMovies = ({ items }: latestsMoviesProps) => {
    const [page, setPage] = useState<number>(1)
    const [movies, setMovies] = useState(items)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const date: Date = new Date()
    const years: number = date.getFullYear()

    const onLoadPostsHandler = async () => {
        const response: Response = await fetch(
            `http://localhost:5000/recent-release/movies?page=${page}`
        )
        const newMovies: Movies[] = await response.json()

        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
            setMovies([...movies, ...newMovies])
            setPage(page + 1)
        }, 500)
    }

    return (
        <Row className="justify-content-start g-2 py-5">
            <Col>
                <div className="d-flex justify-content-between flex-wrap g-2">
                    <h2 className="text-white text-wrap">Film Terbaru</h2>
                    <Link
                        className="text-white link-offset-2 link-underline link-underline-opacity-0 fst-normal fs-5"
                        href="/terbaru"
                    >
                        Selengkapnya <i className="bi bi-arrow-right"></i>
                    </Link>
                </div>
                <hr className="text-secondary" />
                <Row className="row-cols-2 row-cols-lg-6 justify-content-arround g-3 py-3">
                    {page > 1 ? (
                        <>
                            {movies?.map((movie, index) => (
                                <Col key={index} className="mb-3">
                                    <MovieCardItems items={movie} />
                                </Col>
                            ))}
                        </>
                    ) : (
                        <>
                            {movies?.slice(0, 12).map((movie) => (
                                <Col key={movie._id} className="mb-3">
                                    <MovieCardItems items={movie} />
                                </Col>
                            ))}
                        </>
                    )}
                </Row>

                <div className="d-flex justify-content-center">
                    {isLoading && (
                        <div>
                            <p className="text-white-50 text-wrap">
                                Sedang Memuat...
                            </p>
                        </div>
                    )}
                    <button
                        hidden={isLoading}
                        onClick={onLoadPostsHandler}
                        type="button"
                        className="btn btn-outline-0  text-white-50 py-3"
                    >
                        Tampilkan Film Lainnya
                    </button>
                </div>
            </Col>
        </Row>
    )
}

export const NowPlayingMovies = ({ items }: NowPlayingMoviesProps) => {
    const [page, setPage] = useState<number>(1)
    const [movies, setMovies] = useState(items)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const onLoadPostsHandler = async () => {
        const response: Response = await fetch(
            `http://localhost:5000/movies?page=${page}`
        )
        const newMovies: Movies[] = await response.json()

        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
            setMovies([...movies, ...newMovies])
            setPage(page + 1)
        }, 500)
    }

    return (
        <Row className="justify-content-start g-2 py-5">
            <Col>
                <div className="d-flex justify-content-between flex-wrap g-2">
                    <h2 className="text-white text-wrap">
                        Sedang Tayang Di Bioskop
                    </h2>
                    <Link
                        className="text-white link-offset-2 link-underline link-underline-opacity-0 fst-normal fs-5"
                        href="/sedang-tayang"
                    >
                        Selengkapnya <i className="bi bi-arrow-right"></i>
                    </Link>
                </div>

                <hr className="text-secondary" />

                <Row className="row-cols-2 row-cols-lg-6 justify-content-arround g-3 py-3">
                    {page > 1 ? (
                        <>
                            {movies?.map((movie, index) => (
                                <Col key={index} className="mb-3">
                                    <MovieCardItems items={movie} />
                                </Col>
                            ))}
                        </>
                    ) : (
                        <>
                            {movies?.slice(0, 12).map((movie) => (
                                <Col key={movie._id} className="mb-3">
                                    <MovieCardItems items={movie} />
                                </Col>
                            ))}
                        </>
                    )}
                </Row>

                <div className="d-flex justify-content-center">
                    {isLoading && (
                        <div>
                            <p className="text-white-50 text-wrap">
                                Sedang Memuat...
                            </p>
                        </div>
                    )}
                    <button
                        hidden={isLoading}
                        onClick={onLoadPostsHandler}
                        type="button"
                        className="btn btn-outline-0 text-white-50 py-3"
                    >
                        Tampilkan Film Lainnya
                    </button>
                </div>
            </Col>
        </Row>
    )
}

export const PopularMovies = ({ items }: PopularMoviesProps) => {
    const [page, setPage] = useState<number>(1)
    const [movies, setMovies] = useState(items)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const onLoadPostsHandler = async () => {
        const response: Response = await fetch(
            `http://localhost:5000/popular/movies?page=${page}`
        )
        const newMovies: Movies[] = await response.json()

        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
            setMovies([...movies, ...newMovies])
            setPage(page + 1)
        }, 500)
    }

    return (
        <Row className="justify-content-start g-2 py-5">
            <Col>
                <div className="d-flex justify-content-between flex-wrap g-2">
                    <h2 className="text-white text-wrap">Film Terpopuler</h2>
                    <Link
                        className="text-white link-offset-2 link-underline link-underline-opacity-0 fst-normal fs-5"
                        href="/popular"
                    >
                        Selengkapnya <i className="bi bi-arrow-right"></i>
                    </Link>
                </div>

                <hr className="text-secondary" />

                <Row className="row-cols-2 row-cols-lg-6 justify-content-arround g-3 py-3">
                    {page > 1 ? (
                        <>
                            {movies?.map((movie, index) => (
                                <Col key={index} className="mb-3">
                                    <MovieCardItems items={movie} />
                                </Col>
                            ))}
                        </>
                    ) : (
                        <>
                            {movies?.slice(0, 12).map((movie) => (
                                <Col key={movie._id} className="mb-3">
                                    <MovieCardItems items={movie} />
                                </Col>
                            ))}
                        </>
                    )}
                </Row>

                <div className="d-flex justify-content-center">
                    {isLoading && (
                        <div>
                            <p className="text-white-50 text-wrap">
                                Sedang Memuat...
                            </p>
                        </div>
                    )}
                    <button
                        hidden={isLoading}
                        onClick={onLoadPostsHandler}
                        type="button"
                        className="btn btn-outline-0 text-white-50 py-3"
                    >
                        Tampilkan Film Lainnya
                    </button>
                </div>
            </Col>
        </Row>
    )
}

export const TrendingMovies = ({ items }: TrendingMoviesProps) => {
    const [page, setPage] = useState<number>(1)
    const [movies, setMovies] = useState(items)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const onLoadPostsHandler = async () => {
        const response: Response = await fetch(
            `http://localhost:5000/popular/movies?page=${page}`
        )
        const newMovies: Movies[] = await response.json()

        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
            setMovies([...movies, ...newMovies])
            setPage(page + 1)
        }, 500)
    }

    return (
        <Row className="justify-content-start g-2 py-5">
            <Col>
                <div className="d-flex justify-content-between flex-wrap g-2">
                    <h2 className="text-white text-wrap">Film Trending</h2>
                    <Link
                        className="text-white link-offset-2 link-underline link-underline-opacity-0 fst-normal fs-5"
                        href="/trending"
                    >
                        Selengkapnya <i className="bi bi-arrow-right"></i>
                    </Link>
                </div>

                <hr className="text-secondary" />

                <Row className="row-cols-2 row-cols-lg-6 justify-content-arround g-3 py-3">
                    {page > 1 ? (
                        <>
                            {movies?.map((movie, index) => (
                                <Col key={index} className="mb-3">
                                    <MovieCardItems items={movie} />
                                </Col>
                            ))}
                        </>
                    ) : (
                        <>
                            {movies?.slice(0, 12).map((movie) => (
                                <Col key={movie._id} className="mb-3">
                                    <MovieCardItems items={movie} />
                                </Col>
                            ))}
                        </>
                    )}
                </Row>

                <div className="d-flex justify-content-center">
                    {isLoading && (
                        <div>
                            <p className="text-white-50 text-wrap">
                                Sedang Memuat...
                            </p>
                        </div>
                    )}
                    <button
                        hidden={isLoading}
                        onClick={onLoadPostsHandler}
                        type="button"
                        className="btn btn-outline-0 text-white-50 py-3"
                    >
                        Tampilkan Film Lainnya
                    </button>
                </div>
            </Col>
        </Row>
    )
}

export const MovieFeatured = ({ items }: MoviesWithYearsProps) => {
    return (
        <Row className="justify-content-start g-2 py-5">
            <Col>
                <div className="d-flex justify-content-between flex-wrap g-2">
                    <h2 className="text-white text-wrap fst-normal">
                        Film Unggulan
                    </h2>
                    <Link
                        className="text-white link-offset-2 link-underline link-underline-opacity-0 fst-normal fs-5"
                        href="/trending"
                    >
                        Selengkapnya <i className="bi bi-arrow-right"></i>
                    </Link>
                </div>

                <hr className="text-secondary" />

                <div className="row row-cols-2 row-cols-lg-6 justify-content-arround g-3">
                    {items
                        ?.sort()
                        .slice(0, 6)
                        .map((item) => (
                            <div key={item._id} className="col">
                                <MovieCardItems items={item} />
                            </div>
                        ))}
                </div>
            </Col>
        </Row>
    )
}

const Page = ({
    movies,
    latestsMovies,
    popularMovies,
    trendingMovies,
    moviesWithYears,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <>
            <Head>
                <title>Selamat Datang</title>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
                />
            </Head>
            <Container>
                <MovieFeatured items={moviesWithYears} />
                <LatestMovies items={latestsMovies} />
                <NowPlayingMovies items={movies} />
                <PopularMovies items={popularMovies} />
                <TrendingMovies items={trendingMovies} />
            </Container>
        </>
    )
}

Page.getLayout = function getLayout(page: ReactElement) {
    return <MainLayout>{page}</MainLayout>
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    const movies: Movies[] = await fetchAllMovie()
    const latestsMovies: Movies[] = await fetchLatestMovie()
    const popularMovies: Movies[] = await fetchPopularMovie()
    const trendingMovies: Movies[] = await fetchTrendingMovie()
    const moviesWithYears: GetYears[] = await fetchMovieWithYear(
        new Date().getFullYear()
    )

    return {
        props: {
            movies,
            latestsMovies,
            popularMovies,
            trendingMovies,
            moviesWithYears,
        },
    }
}

export default Page
