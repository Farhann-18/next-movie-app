/* eslint-disable no-unused-vars */
import { useRouter } from 'next/navigation'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context'
import Swal from 'sweetalert2'

type Props = {
    setVideoYoutubeTrailer: any
    setVideoStreaming: any
    vidio_id: string
}

type MoviesVideoButtonTrailerProps = {
    setVideoYoutubeTrailer: any
    setVideoStreaming: any
}

type MoviesVideoButtonStreamingProps = {
    setVideoYoutubeTrailer: any
    setVideoStreaming: any
}

type MoviesVideoButtonDownloadProps = { vidio_id: string }

export const MoviesVideoButtonTrailer = ({
    setVideoYoutubeTrailer,
    setVideoStreaming,
}: MoviesVideoButtonTrailerProps) => {
    const onYoutubeTrailerHandler = () => {
        setTimeout(() => {
            setVideoYoutubeTrailer(true)
            setVideoStreaming(false)
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }, 300)
    }

    return (
        <button
            onClick={onYoutubeTrailerHandler}
            type="button"
            className="btn btn-outline-dark rounded text-white-50 text-center"
        >
            <span className="me-2 d-block">
                <i className="bi bi-youtube"></i>
            </span>
            Trailler
        </button>
    )
}

export const MoviesVideoButtonStreaming = ({
    setVideoStreaming,
    setVideoYoutubeTrailer,
}: MoviesVideoButtonStreamingProps) => {
    const onVideoStreamingHandler = () => {
        setTimeout(() => {
            setVideoStreaming(true)
            setVideoYoutubeTrailer(false)
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }, 300)
    }

    return (
        <button
            onClick={onVideoStreamingHandler}
            type="button"
            className="btn btn-outline-dark rounded btn-md text-white-50 text-center ms-2"
        >
            <span className="me-2 d-block">
                <i className="bi bi-play-circle-fill"></i>
            </span>
            Menonton
        </button>
    )
}

export const MoviesVideoButtonDownload = ({
    vidio_id,
}: MoviesVideoButtonDownloadProps) => {
    const router: AppRouterInstance = useRouter()

    const onButtonDownloadHandler = () => {
        const downloadVidioUrl: string = 'https://dl.makimbo.xyz/get'
        // const vidio_id: string = movies?._id.toString()
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('Deleted!', 'Your file has been deleted.', 'success')

                setTimeout(() => {
                    router.push(`${downloadVidioUrl}/${vidio_id}`)
                }, 500)
            }
        })
    }

    return (
        <button
            onClick={onButtonDownloadHandler}
            type="button"
            className="btn btn-outline-dark rounded text-white-50 text-center ms-2"
        >
            <span className="me-2 d-block">
                <i className="bi bi-download"></i>
            </span>
            Download
        </button>
    )
}

export default function MoviesVideoButton({
    setVideoYoutubeTrailer,
    setVideoStreaming,
    vidio_id,
}: Props) {
    return (
        <div className="d-flex flex-row mb-3 py-3">
            <MoviesVideoButtonTrailer
                setVideoYoutubeTrailer={setVideoYoutubeTrailer}
                setVideoStreaming={setVideoStreaming}
            />
            <MoviesVideoButtonStreaming
                setVideoStreaming={setVideoStreaming}
                setVideoYoutubeTrailer={setVideoYoutubeTrailer}
            />

            <MoviesVideoButtonDownload vidio_id={vidio_id} />
        </div>
    )
}
