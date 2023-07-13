/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { Ratio } from 'react-bootstrap'

type Props = { videoTrailer: string }

export default function MoviesIframeVideoTrailer({ videoTrailer }: Props) {
    return (
        <>
            <div
                className="d-flex justify-content-center mx-auto py-3"
                style={{ width: 'auto', height: 'auto' }}
            >
                <Ratio aspectRatio="16x9">
                    <iframe
                        width="auto"
                        height="auto"
                        src={videoTrailer}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </Ratio>
            </div>
        </>
    )
}
