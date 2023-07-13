/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { Ratio } from 'react-bootstrap'

type Props = {
    streamingProvider: any
}

export default function MoviesVideoIframeStreaming({
    streamingProvider,
}: Props) {
    return (
        <>
            <div
                className="d-flex justify-content-center mx-auto py-3"
                style={{ width: 'auto', height: 'auto' }}
            >
                <Ratio aspectRatio="16x9">
                    <iframe
                        src={streamingProvider}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </Ratio>
            </div>
        </>
    )
}
