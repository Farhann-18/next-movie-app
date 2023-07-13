/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

type Props = {
    streams: Streams[]
    streamingProvider: any
    setStreamingProvider: any
    setStreamingInfoProvider: any
}

export default function MoviesVideoStreamsProvider({
    streams,
    streamingProvider,
    setStreamingProvider,
    setStreamingInfoProvider,
}: Props) {
    const onButtonHandler = (url: string, resolution: any, provider: any) => {
        setTimeout(() => {
            setStreamingProvider(url)
            setStreamingInfoProvider(
                `Kualitas Streaming Anda diganti menjadi provider ${provider} dengan kualitas streaming ${resolution}p`
            )
        }, 500)
    }

    return (
        <>
            <div className="d-flex justify-content-end g-2 py-3">
                <div className="dropdown">
                    <button
                        className="btn btn-link link-secondary text-decoration-none dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        Klik Ganti Sumber Video
                    </button>
                    <ul className="dropdown-menu dropdown-menu-dark">
                        {streams?.map((stream, index) => (
                            <li key={index}>
                                <button
                                    type="button"
                                    onClick={() =>
                                        onButtonHandler(
                                            stream?.url,
                                            stream?.resolutions,
                                            stream?.provider
                                        )
                                    }
                                    className="dropdown-item"
                                >
                                    {/* <FontAwesomeIcon icon={faPlay} /> */}
                                    {stream?.provider} <br />
                                    <div className="d-flex g-2">
                                        {stream?.resolutions.map(
                                            (resolution, index) => (
                                                <div
                                                    key={index}
                                                    className="ms-2"
                                                >
                                                    {resolution}p
                                                </div>
                                            )
                                        )}
                                    </div>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}
