/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useState } from 'react'
import MoviesVideoYoutubeTrailer from '../components/MoviesVideoYoutubeTrailer'
import MoviesVideoStreaming from '../components/MoviesVideoStreaming'
import MoviesVideoButton from '../components/MoviesVideoButton'

type MoviesVideoProps = { movies: GetMovies | any; streams: Streams[] }

export default function MoviesVideo({ movies, streams }: MoviesVideoProps) {
    const [videoYoutubeTrailer, setVideoYoutubeTrailer] =
        useState<boolean>(false) // Set False Video Trailer
    const [videoStreaming, setVideoStreaming] = useState<boolean>(true) // Set Default true Video Streaming
    const [streamingProvider, setStreamingProvider] = useState(streams?.[0].url) //Set Default Provider Streaming
    const [streamingInfoProvider, setStreamingInfoProvider] = useState<string>(
        'Jika Provider Streaming Tidak Muncul Anda Dapat Mengganti Provider Streaming Lainnya'
    )
    let vidio_id: string = movies?._id

    return (
        <>
            <MoviesVideoYoutubeTrailer
                trailer={movies}
                videoYoutubeTrailer={videoYoutubeTrailer}
                setVideoYoutubeTrailer={setVideoYoutubeTrailer}
            />
            <MoviesVideoStreaming
                streams={streams}
                movie={movies}
                videoStreaming={videoStreaming}
                setVideoStreaming={setVideoStreaming}
                streamingProvider={streamingProvider}
                setStreamingProvider={setStreamingProvider}
                streamingInfoProvider={streamingInfoProvider}
                setStreamingInfoProvider={setStreamingInfoProvider}
            />

            <MoviesVideoButton
                vidio_id={vidio_id}
                setVideoStreaming={setVideoStreaming}
                setVideoYoutubeTrailer={setVideoYoutubeTrailer}
            />
        </>
    )
}
