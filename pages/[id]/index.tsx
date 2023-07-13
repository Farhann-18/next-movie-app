/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import Head from 'next/head'
import fetchMovie from '@/lib/movie/fetchMovie'
import type {
    GetStaticPaths,
    GetStaticProps,
    InferGetStaticPropsType,
} from 'next'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { ParsedUrlQuery } from 'querystring'
import MovieButtonBack from '../movie/components/MovieButtonBack'
import fetchMovieProviderStreaming from '@/lib/movie/fetchMovieProviderStreaming'
import fetchAllMovie from '@/lib/movie/fetchAllMovie'
import { useState } from 'react'
import { Ratio } from 'react-bootstrap'
import Link from 'next/link'
import MovieCardItems from '../movie/components/MovieCardItems'
import Image from 'next/image'

interface Params extends ParsedUrlQuery {
    id: string
}

type MovieHeadingProps = {
    isStreamingVideos: any
    setIsStreamingVideos: any
    isYoutubeTrailer: any
    setIsYoutubeTrailer: any
    isDownloadVideos: any
    setIsDownloadVideos: any
    setIsLoading: any
    children: React.ReactNode
}

type MovieButtonProps = {
    isStreamingVideos: any
    setIsStreamingVideos: any
    isYoutubeTrailer: any
    setIsYoutubeTrailer: any
    isDownloadVideos: any
    setIsDownloadVideos: any
    setIsLoading: any
}

type AlertMessageProps = { message: string; type: string }

type MovieInfoProps = { movies: GetMovies }

type TrailerVideosProps = { trailerUrl: any }

type MovieDetailsProps = {
    movies: GetMovies
    streams: Streams[]
    recomended: Movies[]
}

type StreamingVideosProps = {
    url: string
    title: string
}

type ProviderStreamingVideosProps = {
    streams: Streams[]
    setIsUrlStreamingVideos: any
    isProviderStreamingVideos: any
    setIsProviderStreamingVideos: any
    setIsResolutionsProviderStreaming: any
}

export const MovieHeading = ({
    isStreamingVideos,
    isYoutubeTrailer,
    isDownloadVideos,
    setIsYoutubeTrailer,
    setIsStreamingVideos,
    setIsDownloadVideos,
    setIsLoading,
    children,
}: MovieHeadingProps) => {
    return (
        <Row className="justify-content-center g-2 py-3">
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
                        <MovieButton
                            setIsDownloadVideos={setIsDownloadVideos}
                            setIsStreamingVideos={setIsStreamingVideos}
                            setIsYoutubeTrailer={setIsYoutubeTrailer}
                            setIsLoading={setIsLoading}
                            isDownloadVideos={isDownloadVideos}
                            isStreamingVideos={isStreamingVideos}
                            isYoutubeTrailer={isYoutubeTrailer}
                        />

                        {children}
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export const MovieButton = ({
    setIsYoutubeTrailer,
    setIsDownloadVideos,
    setIsStreamingVideos,
    isYoutubeTrailer,
    isDownloadVideos,
    isStreamingVideos,
}: MovieButtonProps) => {
    return (
        <div className="d-grid gap-2 d-md-block">
            <button
                onClick={() => {
                    setIsYoutubeTrailer(true)
                    setIsDownloadVideos(false)
                    setIsStreamingVideos(false)
                }}
                type="button"
                className={`btn btn-outline-dark rounded-pill btn-md text-white-50 text-center ms-2 ${
                    isYoutubeTrailer ? 'active' : ''
                }`}
            >
                <i className="bi bi-youtube me-2 "></i>
                Trailer
            </button>
            <button
                onClick={() => {
                    setIsYoutubeTrailer(false)
                    setIsDownloadVideos(false)
                    setIsStreamingVideos(true)
                }}
                type="button"
                className={`btn btn-outline-dark rounded-pill btn-md text-white-50 text-center ms-2 ${
                    isStreamingVideos ? 'active' : ''
                } `}
            >
                <i className="bi bi-play-circle-fill me-2"></i>
                Menonton
            </button>
            <button
                onClick={() => {
                    setIsYoutubeTrailer(false)
                    setIsDownloadVideos(true)
                    setIsStreamingVideos(false)
                }}
                type="button"
                className={`btn btn-outline-dark rounded-pill btn-md text-white-50 text-center ms-2 ${
                    isDownloadVideos ? 'active' : ''
                }`}
            >
                <i className="bi bi-download me-2"></i>
                Download
            </button>
        </div>
    )
}

export const AlertMessage = ({ message, type = 'dark' }: AlertMessageProps) => {
    return (
        <div className="pt-5">
            <div
                className={`alert alert-${type} alert-dismissible fade show`}
                role="alert"
            >
                <h4 className="alert-heading text-wrap text-capitalize fs-4">
                    Perhatian
                </h4>
                <p className="text-start text-wrap text-capitalize fst-normal fs-5">
                    {message}
                </p>
            </div>
        </div>
    )
}

export const MovieInfo = ({ movies }: MovieInfoProps) => {
    const [title, setTitle] = useState<string>(movies?.title)
    const [posterImg, setPosterImg] = useState<string>(movies?.posterImg)

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
                        Details Informasi Film {title}
                    </Card.Title>

                    <hr className="text-white-50" />

                    <Row className="justify-content-arround g-2 py-3">
                        <Col lg={3}>
                            <Image
                                src={movies?.posterImg}
                                width={250}
                                height={250}
                                alt={movies?.title}
                                priority
                                className="rounded img-fluid"
                            />
                        </Col>
                        <Col>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item bg-dark bg-opacity-10 text-white-50">
                                    <div className="row justify-content-start g-2 pt-3">
                                        <div className="col-3">
                                            <p>Kualitas</p>
                                            <p>Negara</p>
                                            <p>Bintang Film</p>
                                            <p>Sutradara</p>
                                            <p>Genre</p>
                                            <p>IMDB</p>
                                            <p>Diterbitkan</p>
                                            <p>Durasi</p>
                                            <p>Sinopsis</p>
                                        </div>
                                        <div className="col-8">
                                            <p>: {movies?.quality}</p>
                                            <p>
                                                :{' '}
                                                {movies?.countries.map(
                                                    (country) => (
                                                        <Link
                                                            key={country}
                                                            className="me-2 text-white-50 link-offset-2 link-underline link-underline-opacity-0"
                                                            href={`/country/${country
                                                                .toLowerCase()
                                                                .replace(
                                                                    / /g,
                                                                    '-'
                                                                )
                                                                .replace(
                                                                    /[^\w-]+/g,
                                                                    ''
                                                                )}`}
                                                        >
                                                            {country},
                                                        </Link>
                                                    )
                                                )}
                                            </p>
                                            <p>
                                                :{' '}
                                                {movies?.casts.map((cast) => (
                                                    <span
                                                        key={cast}
                                                        className="me-2"
                                                    >
                                                        {cast},
                                                    </span>
                                                ))}
                                            </p>
                                            <p>
                                                :{' '}
                                                {movies?.directors.map(
                                                    (director) => (
                                                        <span
                                                            key={director}
                                                            className="me-2"
                                                        >
                                                            {director},
                                                        </span>
                                                    )
                                                )}
                                            </p>
                                            <p>
                                                :{' '}
                                                {movies?.genres.map((genre) => (
                                                    <Link
                                                        key={genre}
                                                        className="me-2 text-white-50 link-offset-2 link-underline link-underline-opacity-0"
                                                        href={`/genre/${genre.toLocaleLowerCase()}`}
                                                    >
                                                        {genre},
                                                    </Link>
                                                ))}
                                            </p>
                                            <p>: {movies?.rating}</p>
                                            <p>: {movies?.releaseDate}</p>
                                            <p>: {movies?.duration}</p>
                                            <p>: {movies?.synopsis}</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Card>
            </Col>
        </Row>
    )
}

export const TrailerVideos = ({ trailerUrl }: TrailerVideosProps) => {
    let regex: RegExp =
        /(https?:\/\/)?(((m|www)\.)?(youtube(-nocookie)?|youtube.googleapis)\.com.*(v\/|v=|vi=|vi\/|e\/|embed\/|user\/.*\/u\/\d+\/)|youtu\.be\/)([_0-9a-z-]+)/i

    let vidio_id =
        trailerUrl && trailerUrl !== '-'
            ? trailerUrl.toString().match(regex)[8]
            : null

    const youtubeUrl = `https://www.youtube.com/embed/${vidio_id}?autoplay=0`

    return (
        <Row
            className="justify-content-start g-3 py-5"
            style={{ width: 'auto', height: 'auto' }}
        >
            <Col>
                <Ratio aspectRatio="16x9">
                    <iframe
                        width="auto"
                        height="auto"
                        src={youtubeUrl}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </Ratio>
                {/* <div className="pt-5">
                    <h4 className="text-white text-wrap text-capitalize">
                        Menonton Film Trailer {movie?.title}
                    </h4>
                </div> */}
            </Col>
        </Row>
    )
}

export const StreamingVideos = ({ url, title }: StreamingVideosProps) => {
    return (
        <Row className="justify-content-start g-3 py-5">
            <Col>
                <Ratio aspectRatio="16x9">
                    <iframe
                        src={url}
                        title={`Menonton Film ${title}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </Ratio>
                <div className="pt-5">
                    <h4 className="text-white text-wrap text-capitalize">
                        Menonton Film {title} Subtitle Indonesia Streaming dan
                        Download
                    </h4>
                </div>
            </Col>
        </Row>
    )
}

export const ProviderStreamingVideos = ({
    streams,
    setIsUrlStreamingVideos,
    setIsProviderStreamingVideos,
    setIsResolutionsProviderStreaming,
    isProviderStreamingVideos,
}: ProviderStreamingVideosProps) => {
    return (
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
                Pilihan Provider Streaming Video
            </Card.Title>
            <hr className="text-white-50" />
            <div className="d-grid gap-2 d-md-block">
                {streams?.map((stream, index) => (
                    <button
                        onClick={() => {
                            setIsUrlStreamingVideos(stream?.url)
                            setIsProviderStreamingVideos(stream?.provider)
                            setIsResolutionsProviderStreaming(
                                stream?.resolutions
                            )
                        }}
                        key={index}
                        type="button"
                        className={`btn btn-outline-dark text-center text-wrap text-white-50 me-3 mb-3 btn-md rounded ${
                            isProviderStreamingVideos === stream?.provider
                                ? 'active'
                                : ''
                        }`}
                    >
                        <span>{stream?.provider}</span> <br />
                        {stream?.resolutions.map((resolution) => (
                            <span key={resolution} className="me-1">
                                {resolution}p,
                            </span>
                        ))}
                    </button>
                ))}
            </div>
        </Card>
    )
}

type DownloadVideosProps = { movie_id: string; title: string }

export const DownloadVideos = ({ movie_id, title }: DownloadVideosProps) => {
    const links = `https://dl.makimbo.xyz/get/${movie_id}`
    return (
        <Row className="justify-content-start g-3 py-3">
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
                        Download Film {title}
                    </Card.Title>
                    <hr className="text-white-50" />
                    <div>
                        <p className="text-white text-start text-capitalize">
                            Untuk mendownload film silahkan ikuti petunjuk
                            berikut:
                        </p>
                        <ol className="text-white-50">
                            <li>Klik tombol Download Film Ini</li>
                            <li>
                                Setelahnya browser akan membuka window baru ke
                                halaman indexmovie.
                            </li>
                            <li>
                                Tunggu 10 detik sampai dengan tombol KLIK TOMBOL
                                INI UNTUK KE HALAMAN DOWNLOAD FILM berwarna
                                merah muncul pada pojok kiri atas browser
                            </li>
                        </ol>
                    </div>
                    <div className="d-flex justify-content-center mx-auto py-3">
                        <Link
                            href={links}
                            target="_blank"
                            rel="noopener"
                            aria-label={`Download Film ${title}`}
                            className="link-secondary link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover "
                        >
                            Download Film Ini <i className="bi bi-download"></i>
                        </Link>
                    </div>
                </Card>
            </Col>
        </Row>
    )
}

type MovieRecomendedProps = { items: Movies[] }

export const MovieRecomended = ({ items }: MovieRecomendedProps) => {
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
                        Rekomendasi Film Lainnya
                    </Card.Title>

                    <hr className="text-white-50" />
                    <div className="row row-cols-2 row-cols-xl-6 row-cols-lg-4 row-cols-md-3  g-3 justify-content-arround py-3">
                        {items
                            ?.sort()
                            .slice(0, 6)
                            .map((item) => (
                                <div key={item._id} className="col">
                                    <MovieCardItems items={item} />
                                </div>
                            ))}
                    </div>
                </Card>
            </Col>
        </Row>
    )
}

export default function MovieDetails({
    movies,
    streams,
    recomended,
}: InferGetStaticPropsType<typeof getStaticProps>) {
    const [isStreamingVideos, setIsStreamingVideos] = useState<boolean>(false)
    const [isYoutubeTrailer, setIsYoutubeTrailer] = useState<boolean>(true) // Set Default True
    const [isDownloadVideos, setIsDownloadVideos] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [isUrlStreamingVideos, setIsUrlStreamingVideos] = useState<string>(
        streams[0]['url']
    )
    const [isProviderStreamingVideos, setIsProviderStreamingVideos] =
        useState<string>(streams[0]['provider'])
    const [isResolutionsProviderStreaming, setIsResolutionsProviderStreaming] =
        useState<any>(streams[0]['resolutions'])

    return (
        <>
            <Head>
                <title>
                    Nonton Film {movies?.title} Subtitle Indonesia Streaming dan
                    Donwload
                </title>
                <meta
                    name="description"
                    content={`Nonton Film ${movies?.title} Subtitle Indonesia Streaming dan
                    Donwload`}
                />
            </Head>
            <Container className="position-relative py-5">
                <Row className="justify-content-center g-2">
                    <Col lg={10}>
                        <MovieHeading
                            isStreamingVideos={isStreamingVideos}
                            setIsStreamingVideos={setIsStreamingVideos}
                            isYoutubeTrailer={isYoutubeTrailer}
                            setIsYoutubeTrailer={setIsYoutubeTrailer}
                            isDownloadVideos={isDownloadVideos}
                            setIsDownloadVideos={setIsDownloadVideos}
                            setIsLoading={setIsLoading}
                        >
                            {/*  */}
                            {isStreamingVideos ? (
                                <AlertMessage
                                    type="warning"
                                    message={`Saat Ini Kamu Menggunakan Provider Streaming ${isProviderStreamingVideos} dengan kualitas video ${isResolutionsProviderStreaming}p, Jika Provider Video Tidak Muncul Kamu Bisa Mengganti Provider Lainnya`}
                                />
                            ) : null}
                        </MovieHeading>

                        {isYoutubeTrailer ? (
                            <TrailerVideos trailerUrl={movies?.trailerUrl} />
                        ) : isStreamingVideos ? (
                            <>
                                <ProviderStreamingVideos
                                    streams={streams}
                                    setIsUrlStreamingVideos={
                                        setIsUrlStreamingVideos
                                    }
                                    setIsProviderStreamingVideos={
                                        setIsProviderStreamingVideos
                                    }
                                    isProviderStreamingVideos={
                                        isProviderStreamingVideos
                                    }
                                    setIsResolutionsProviderStreaming={
                                        setIsResolutionsProviderStreaming
                                    }
                                />
                                <StreamingVideos
                                    url={isUrlStreamingVideos}
                                    title={movies?.title}
                                />
                            </>
                        ) : isDownloadVideos ? (
                            <DownloadVideos
                                title={movies?.title}
                                movie_id={movies?._id}
                            />
                        ) : null}

                        <MovieInfo movies={movies} />
                        <MovieRecomended items={recomended} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const movies: Movies[] = await fetchAllMovie()
    const paths = movies?.map((movie) => ({
        params: { id: movie._id.toString() },
    }))

    return { paths, fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps<MovieDetailsProps> = async ({
    params,
}) => {
    const { id } = params as Params
    const movies: GetMovies = await fetchMovie(id)
    const streams: Streams[] = await fetchMovieProviderStreaming(id)
    const recomended: Movies[] = await fetchAllMovie()

    return { props: { movies, streams, recomended } }
}
