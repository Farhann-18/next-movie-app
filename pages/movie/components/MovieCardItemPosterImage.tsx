import Image from 'next/image'

type Props = {
    imagesSource: string
    title: string
}

export default function MovieCardItemPosterImage({
    imagesSource,
    title,
}: Props) {
    return (
        <Image
            src={imagesSource}
            alt={`Nonton Film ${title}`}
            title={`Nonton Film ${title}`}
            width={300}
            height={300}
            className="img-fluid d-block-lg next-card-item__posterImg "
            priority
        />
    )
}
