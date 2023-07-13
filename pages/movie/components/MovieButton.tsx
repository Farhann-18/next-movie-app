/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

type MovieButtonProps = {
    isMovies: boolean
    setIsMovies: any
    isLatestMovies: boolean
    setIsLatestMovies: any
    isPopularMovies: boolean
    setIsPopularMovies: any
    isTrendingMovies: boolean
    setIsTrendingMovies: any
}

const MovieButton = ({
    isMovies,
    isLatestMovies,
    isPopularMovies,
    isTrendingMovies,
    setIsMovies,
    setIsLatestMovies,
    setIsPopularMovies,
    setIsTrendingMovies,
}: MovieButtonProps) => {
    return (
        <div className="d-grid gap-2 d-md-block">
            <button
                onClick={() => {
                    setIsMovies(true)
                    setIsLatestMovies(false)
                    setIsPopularMovies(false)
                    setIsTrendingMovies(false)
                }}
                type="button"
                className={`btn btn-outline-dark btn-md rounded-pill text-white-50 text-center me-2  ${
                    isMovies && 'active'
                }`}
            >
                Semua
            </button>
            <button
                onClick={() => {
                    setIsLatestMovies(true)
                    setIsMovies(false)
                    setIsPopularMovies(false)
                    setIsTrendingMovies(false)
                }}
                type="button"
                className={`btn btn-outline-dark btn-md rounded-pill text-white-50 text-center me-2  ${
                    isLatestMovies && !isMovies && 'active'
                }`}
            >
                Terbaru
            </button>
            <button
                onClick={() => {
                    setIsPopularMovies(true)
                    setIsLatestMovies(false)
                    setIsMovies(false)
                    setIsTrendingMovies(false)
                }}
                type="button"
                className={`btn btn-outline-dark btn-md rounded-pill text-white-50 text-center me-2  ${
                    isPopularMovies && !isMovies && 'active'
                }`}
            >
                Terpopuler
            </button>
            <button
                onClick={() => {
                    setIsPopularMovies(false)
                    setIsLatestMovies(false)
                    setIsMovies(false)
                    setIsTrendingMovies(true)
                }}
                type="button"
                className={`btn btn-outline-dark btn-md rounded-pill text-white-50 text-center me-2  ${
                    isTrendingMovies && !isMovies && 'active'
                }`}
            >
                Trending
            </button>
        </div>
    )
}

export default MovieButton
