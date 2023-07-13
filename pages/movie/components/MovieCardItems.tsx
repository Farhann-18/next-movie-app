/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import Link from 'next/link'
import MovieCardItemPosterImage from './MovieCardItemPosterImage'
import MovieCardItemRating from './MovieCardItemRating'
import MovieCardItemQualityResolution from './MovieCardItemQualityResolution'
import MovieCardItemTitle from './MovieCardItemTitle'

type Props = { items: Movies }

export default function MovieCardItems({ items }: Props) {
    return (
        <div className="next-card-item">
            <Link
                className="stretched-link"
                aria-label={items?.title}
                href={`/${items?._id}`}
            >
                <MovieCardItemPosterImage
                    imagesSource={items?.posterImg}
                    title={items?.title}
                />
                <MovieCardItemRating rating={items?.rating} />
                <MovieCardItemQualityResolution
                    qualityResolutionSource={items?.qualityResolution}
                />
                <MovieCardItemTitle title={items?.title} />
            </Link>
        </div>
    )
}
