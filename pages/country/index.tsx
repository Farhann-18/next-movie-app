/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import Head from 'next/head'
import { InferGetServerSidePropsType, GetStaticProps } from 'next'
import { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import fetchAllCountryMovie from '@/lib/movie/fetchAllCountryMovie'
import MovieButtonBack from '../movie/components/MovieButtonBack'
import InfiniteScroll from 'react-infinite-scroll-component'
import MovieCardItems from '../movie/components/MovieCardItems'

type Props = { countries: Countries[] }

type MovieHeadingProps = {
    countries: Props['countries']
    parameter: any
    setParameter: any
    setCount: any
    isLoading: any
    setIsLoading: any
}

type MovieCountriesButtonProps = {
    countries: Countries[]
    parameter: any
    setParameter: any
    setCount: any
    setIsLoading: any
}

type MovieProps = {
    parameter: string
    count: number
    isLoading: boolean
}

export const MovieHeading = ({
    countries,
    parameter,
    setParameter,
    setCount,
    isLoading,
    setIsLoading,
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
                    <MovieCountriesButton
                        countries={countries}
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

export const Movies = ({ parameter, count, isLoading }: MovieProps) => {
    const [items, setItems] = useState<Movies[]>([])
    const [newItems, setNewItems] = useState<Movies[]>([])
    const [page, setPage] = useState<number>(1)

    useEffect(() => {
        const fetchData = async () => {
            const response: Response = await fetch(
                `http://localhost:5000/countries/${parameter}`
            )
            const movies: Movies[] = await response.json()
            setItems(movies)
        }

        fetchData()
    }, [parameter])

    useEffect(() => {
        const fetchMoreData = async () => {
            const api: string = 'http://localhost:5000'
            const endpoint: string = `countries/${parameter}`
            const response: Response = await fetch(
                `${api}/${endpoint}?page=${page}`
            )

            const newMovies: Movies[] = await response.json()
            setNewItems(newMovies)
        }

        fetchMoreData()
    }, [page, parameter])

    // SetInfiniteScroll Component
    const fetchMoreData = () => {
        setTimeout(() => {
            setItems([...items, ...newItems])
            setPage(page + 1)
        }, 500)
    }

    return (
        <>
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
                            {count} Film Dari Negara {parameter} Terbaru dan
                            Terlengkap
                        </Card.Title>
                        <hr className="text-white-50" />
                        {isLoading && (
                            <div className="text-white-50 text-start">
                                Sedang memuat...
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
        </>
    )
}

export const MovieCountriesButton = ({
    countries,
    parameter,
    setParameter,
    setCount,
    setIsLoading,
}: MovieCountriesButtonProps) => {
    return (
        <div className="d-flex justify-content-start align-items-center flex-wrap  g-2 py-3">
            {countries?.map((country, index) => (
                <button
                    key={index}
                    onClick={() => {
                        setIsLoading(true)
                        setTimeout(() => {
                            setIsLoading(false)
                            setParameter(country?.parameter)
                            setCount(country?.numberOfContents)
                        }, 500)
                    }}
                    type="button"
                    className="btn btn-outline-dark btn-md rounded text-white-50 text-center me-2 mb-2"
                    title={`Film Dari Negara ${country?.name}`}
                    disabled={country?.parameter === parameter}
                >
                    {country?.name}
                </button>
            ))}
        </div>
    )
}

export default function Country({
    countries,
}: InferGetServerSidePropsType<typeof getStaticProps>) {
    const [parameter, setParameter] = useState<string>(
        countries[0]['parameter']
    )
    const [count, setCount] = useState<number>(countries[0]['numberOfContents'])
    const [isLoading, setIsLoading] = useState<boolean>(false)

    return (
        <>
            <Container className="position-relative py-5">
                <MovieHeading
                    countries={countries}
                    parameter={parameter}
                    setParameter={setParameter}
                    setCount={setCount}
                    isLoading={isLoading}
                    setIsLoading={setIsLoading}
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
    const countries: Countries[] = await fetchAllCountryMovie()

    return { props: { countries }, revalidate: 60 }
}
