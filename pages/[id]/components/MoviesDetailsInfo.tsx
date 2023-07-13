/* eslint-disable no-undef */
import HeadingTitle from '@/components/HeadingTitle'
import Link from 'next/link'

type Props = { movies: GetMovies }

export default function MoviesDetailsInfo({ movies }: Props) {
    return (
        <div className="row justify-content-start g-2">
            <div className="col">
                <div className="mb-3">
                    <HeadingTitle title={movies?.title} />
                    <hr className="text-white-50" />
                </div>
                <div className="table-responsive">
                    <table className="table table-borderless">
                        <tbody className="bg-dark">
                            <tr className="d-flex">
                                <td className="col-3 col-lg-2 text-body">
                                    Kualitas Video
                                </td>
                                <td className="col-9 col-lg-10 text-body">
                                    {movies?.quality}
                                </td>
                            </tr>
                            <tr className="d-flex">
                                <td className="col-3 col-lg-2 text-body">
                                    Negara
                                </td>
                                <td className="col-9 col-lg-10 text-body">
                                    {movies?.countries.map((country: any) => (
                                        <Link
                                            key={country}
                                            className="link-body-emphasis link-offset-2 link-underline link-underline-opacity-0 me-2"
                                            href={`/country/${country
                                                .toLowerCase()
                                                .replace(/ /g, '-')
                                                .replace(/[^\w-]+/g, '')}`}
                                        >
                                            {country}
                                        </Link>
                                    ))}
                                </td>
                            </tr>
                            <tr className="d-flex">
                                <td className="col-3 col-lg-2 text-body">
                                    Bintang Film
                                </td>
                                <td className="col-9 col-lg-10 text-body">
                                    {/* {JSON.stringify(movies?.casts)} */}
                                    {movies?.casts.map((cast: any) => (
                                        <span key={cast}>{cast},</span>
                                    ))}
                                </td>
                            </tr>
                            <tr className="d-flex">
                                <td className="col-3 col-lg-2 text-body">
                                    Sutradara
                                </td>
                                <td className="col-9 col-lg-10 text-body">
                                    {JSON.stringify(movies?.directors)}
                                </td>
                            </tr>
                            <tr className="d-flex">
                                <td className="col-3 col-lg-2 text-body">
                                    Genre
                                </td>
                                <td className="col-9 col-lg-10 text-body">
                                    {movies?.genres.map((genre: any) => (
                                        <Link
                                            key={genre}
                                            href={`genre/${genre.toLowerCase()}`}
                                            className="link-body-emphasis link-offset-2 link-underline link-underline-opacity-0 me-2"
                                        >
                                            {genre},
                                        </Link>
                                    ))}
                                </td>
                            </tr>
                            <tr className="d-flex">
                                <td className="col-3 col-lg-2 text-body">
                                    IMDB
                                </td>
                                <td className="col-9 col-lg-10 text-body">
                                    {movies?.rating}
                                </td>
                            </tr>

                            <tr className="d-flex">
                                <td className="col-3 col-lg-2 text-body">
                                    Diterbitkan
                                </td>
                                <td className="col-9 col-lg-10 text-body">
                                    {movies?.releaseDate}
                                </td>
                            </tr>
                            <tr className="d-flex">
                                <td className="col-3 col-lg-2 text-body">
                                    Durasi
                                </td>
                                <td className="col-9 col-lg-10 text-body">
                                    {movies?.duration}
                                </td>
                            </tr>
                            <tr className="d-flex">
                                <td className="col-3 col-lg-2">Sinopsis</td>
                                <td className="col-9 col-lg-10 text-wrap">
                                    {movies?.synopsis}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
