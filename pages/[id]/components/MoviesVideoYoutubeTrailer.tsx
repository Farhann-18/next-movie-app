/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import HeadingTitle from '@/components/HeadingTitle'
import MoviesIframeVideoTrailer from '../components/MoviesVideoIframeTrailer'

type Props = {
    trailer: any
    videoYoutubeTrailer: any
    setVideoYoutubeTrailer: any
}

export default function MoviesVideoYoutubeTrailer({
    trailer,
    videoYoutubeTrailer,
    setVideoYoutubeTrailer,
}: Props) {
    let regex: RegExp =
        /(https?:\/\/)?(((m|www)\.)?(youtube(-nocookie)?|youtube.googleapis)\.com.*(v\/|v=|vi=|vi\/|e\/|embed\/|user\/.*\/u\/\d+\/)|youtu\.be\/)([_0-9a-z-]+)/i

    let vidio_id =
        trailer?.trailerUrl && trailer?.trailerUrl !== '-'
            ? trailer?.trailerUrl.toString().match(regex)[8]
            : null

    const youtubeUri: string = 'https://www.youtube.com'
    const endpoint: string = `embed/${vidio_id}?autoplay=0`
    const videoTrailer: string = `${youtubeUri}/${endpoint}`

    return (
        <>
            {videoYoutubeTrailer && (
                <>
                    <MoviesIframeVideoTrailer videoTrailer={videoTrailer} />
                    <HeadingTitle title={`Trailer: ${trailer?.title}`} />
                    <hr className="text-white-50" />
                </>
            )}
        </>
    )
}
