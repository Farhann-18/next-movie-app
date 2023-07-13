/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import Head from 'next/head'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import fetchAllYearMovie from '@/lib/movie/FetchAllYearMovie'
import MovieButtonBack from '../movie/components/MovieButtonBack'
import InfiniteScroll from 'react-infinite-scroll-component'
import MovieCardItems from '../movie/components/MovieCardItems'

type Props = { years: Years[] }

type MovieHeadingProps = {
    years: Props['years']
    parameter: any
    setParameter: any
    isLoading: any
    setIsLoading: any
    count: any
    setCount: any
}

type MovieYearsButtonProps = {
    years: Years[]
    parameter: any
    setParameter: any
    setCount: any
    setIsLoading: any
}

type MoviesProps = { parameter: any; count: number; isLoading: boolean }

export const MovieHeading = ({
    years,
    parameter,
    setParameter,
    isLoading,
    setIsLoading,
    count,
    setCount,
}: MovieHeadingProps) => {
    return (
        <Row className="justify-content-start g-2 py-3">
            <Col>
                <Card
                    body
                    style={{
                        width: '100%',
                        height: 'auto',
                        backgroundColor: '#0f0f0f',
                        borderRadius: '0',
                    }}
                >
                    <MovieButtonBack />
                    <hr className="text-white-50" />
                    <MovieYearsButton
                        years={years}
                        parameter={parameter}
                        setParameter={setParameter}
                        setCount={setCount}
                        setIsLoading={setIsLoading}
                    />
                </Card>
            </Col>
        </Row>
    )
}

export const MovieYearsButton = ({
    years,
    parameter,
    setParameter,
    setCount,
    setIsLoading,
}: MovieYearsButtonProps) => {
    return (
        <div className="d-flex justify-content-start align-items-center flex-wrap  g-2 py-3">
            {years?.map((year, index) => (
                <button
                    key={index}
                    onClick={() => {
                        setIsLoading(true)
                        setTimeout(() => {
                            setIsLoading(false)
                            setParameter(year.parameter)
                            setCount(year.numberOfContents)
                        }, 500)
                    }}
                    type="button"
                    className="btn btn-outline-dark btn-md rounded text-white-50 text-center me-2 mb-2"
                    disabled={year.parameter === parameter}
                    title={`Film Di Tahun ${year?.parameter}`}
                >
                    {year.parameter}
                </button>
            ))}
        </div>
    )
}

export const Movies = ({ parameter, count, isLoading }: MoviesProps) => {
    const [items, setItems] = useState<Movies[]>([])
    const [newItems, setNewItems] = useState<Movies[]>([])
    const [page, setPage] = useState<number>(1)

    useEffect(() => {
        const fetchData = async () => {
            const response: Response = await fetch(
                `http://localhost:5000/years/${parameter}`
            )
            const movies: Movies[] = await response.json()
            setItems(movies)
        }

        fetchData()
    }, [parameter])

    useEffect(() => {
        const fetchMoreData = async () => {
            const api: string = 'http://localhost:5000'
            const endpoint: string = `years/${parameter}`
            const response: Response = await fetch(
                `${api}/${endpoint}?page=${page}`
            )

            const newMovies: Movies[] = await response.json()

            setNewItems(newMovies)
        }

        fetchMoreData()
    }, [page, parameter])

    const fetchMoreData = async () => {
        setTimeout(() => {
            setItems([...items, ...newItems])
            setPage(page + 1)
        }, 500)
    }

    return (
        <Row className="justify-content-start g-2 py-3">
            <Col>
                <Card
                    body
                    style={{
                        width: '100%',
                        height: 'auto',
                        backgroundColor: '#0f0f0f',
                        borderRadius: '0',
                    }}
                >
                    <Card.Title className="text-white text-uppercase text-wrap mb-3">
                        {count} Film di Tahun {parameter} terbaru dan terlengkap{' '}
                    </Card.Title>
                    <hr className="text-white-50" />

                    {isLoading && (
                        <div className="text-white-50 text-start">
                            Sedang Memuat...
                        </div>
                    )}

                    {!isLoading && (
                        <InfiniteScroll
                            dataLength={items?.length}
                            next={fetchMoreData}
                            hasMore={true}
                            loader={
                                !isLoading && (
                                    <div className="d-flex justify-content-center mx-auto py-5 text-white-50">
                                        Sedang Memuat...
                                    </div>
                                )
                            }
                            style={{ overflow: 'hidden' }}
                        >
                            <div className="row row-cols-2 row-cols-lg-6 justify-content-arround g-3 py-3">
                                {items?.map((item, index) => (
                                    <div key={index} className="col">
                                        <MovieCardItems items={item} />
                                    </div>
                                ))}
                            </div>
                        </InfiniteScroll>
                    )}
                </Card>
            </Col>
        </Row>
    )
}

export default function Years({
    years,
}: InferGetStaticPropsType<typeof getStaticProps>) {
    const [parameter, setParameter] = useState<string | number>(
        years[0]['parameter']
    )
    const [count, setCount] = useState<number>(years[0]['numberOfContents'])
    const [isLoading, setIsLoading] = useState<boolean>(false)

    return (
        <>
            <Head>
                <title>
                    Kumpulan Film Dari Semua Tahun Terbaru dan Terlengkap
                </title>
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
            <Container className="position-relative py-5">
                <MovieHeading
                    years={years}
                    parameter={parameter}
                    setParameter={setParameter}
                    isLoading={isLoading}
                    setIsLoading={setIsLoading}
                    count={count}
                    setCount={setCount}
                />
                <Movies
                    parameter={parameter}
                    count={count}
                    isLoading={isLoading}
                />
            </Container>
        </>
    )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
    const years: Years[] = await fetchAllYearMovie()

    return { props: { years }, revalidate: 60 }
}
