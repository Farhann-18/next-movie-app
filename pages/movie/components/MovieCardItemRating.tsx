import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

type Props = { rating: number }

export default function MovieCardItemRating({ rating }: Props) {
    return (
        <>
            {rating && (
                <div className="next-card-item__rating">
                    <FontAwesomeIcon icon={faStar} className="text-warning" />
                    {/* <i className="bi bi-star-fill text-warning m-1"></i> */}
                    {rating}
                </div>
            )}
        </>
    )
}
