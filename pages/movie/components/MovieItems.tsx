/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Figure from 'react-bootstrap/Figure'
type MovieItemsProps = { items: Movies }
type MovieItemsPosterImageProps = { images: string; title: string }
type MovieItemsRatingProps = { rating: number }
type MovieItemsTitleProps = { title: string; movie_id: string }

const MovieItems = ({ items }: MovieItemsProps) => {
    return (
        <div className="next-card-item mb-3">
            <Figure>
                <MovieItemsPosterImage
                    images={items?.posterImg}
                    title={items?.title}
                />
                <Figure.Caption className="pt-3 ">
                    <MovieItemsTitle
                        title={items?.title}
                        movie_id={items?._id}
                    />
                    <MovieItemsRating rating={items?.rating} />
                </Figure.Caption>
            </Figure>
        </div>
    )
}

export const MovieItemsPosterImage = ({
    images,
    title,
}: MovieItemsPosterImageProps) => {
    return (
        <Image
            src={images}
            alt={`Nonton Film ${title}`}
            title={`Nonton Film ${title}`}
            width={300}
            height={300}
            className="img-fluid next-card-item__posterImg "
            priority
        />
    )
}

export const MovieItemsRating = ({ rating }: MovieItemsRatingProps) => {
    return rating ? (
        <div className="next-card-item__rating">
            <FontAwesomeIcon icon={faStar} className="text-warning" />
            {rating}
        </div>
    ) : null
}

export const MovieItemsTitle = ({ title, movie_id }: MovieItemsTitleProps) => {
    return (
        <div className="d-flex justify-content-start">
            <Link
                className="stretched-link link-secondary link-offset-2 link-underline link-underline-opacity-0 text-start text-capitalize fst-normal fs-6"
                aria-label={title}
                href={`/${movie_id}`}
            >
                {title?.length >= 50 ? `${title?.slice(0, 50)}... ` : title}
            </Link>
        </div>
    )
}

export default MovieItems
