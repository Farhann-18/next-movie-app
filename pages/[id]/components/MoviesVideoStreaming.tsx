/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import MoviesVideoStreamsProvider from '../components/MoviesVideoStreamsProvider'
import MoviesVideoIframeStreaming from '../components/MoviesVideoIframeStreaming'
import MoviesVideoStreamingProviderInfo from '../components/MoviesVideoStreamingProviderInfo'
import HeadingTitle from '@/components/HeadingTitle'

type Props = {
    streams: Streams[]
    movie: Movies
    videoStreaming: any
    setVideoStreaming: any
    streamingProvider: any
    setStreamingProvider: any
    streamingInfoProvider: any
    setStreamingInfoProvider: any
}

export default function MoviesVideoStreaming({
    streams,
    movie,
    videoStreaming,
    setVideoStreaming,
    streamingProvider,
    setStreamingProvider,
    streamingInfoProvider,
    setStreamingInfoProvider,
}: Props) {
    return (
        <>
            {videoStreaming ? (
                <>
                    <MoviesVideoStreamingProviderInfo
                        streamingInfoProvider={streamingInfoProvider}
                    />

                    <MoviesVideoStreamsProvider
                        streams={streams}
                        streamingProvider={streamingProvider}
                        setStreamingProvider={setStreamingProvider}
                        setStreamingInfoProvider={setStreamingInfoProvider}
                    />
                    <MoviesVideoIframeStreaming
                        streamingProvider={streamingProvider}
                    />

                    <HeadingTitle
                        title={`Nonton Film ${movie?.title} streaming dan download gratis`}
                    />

                    <hr className="text-white-50" />
                </>
            ) : null}
        </>
    )
}
