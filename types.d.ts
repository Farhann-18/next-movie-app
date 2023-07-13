/* eslint-disable no-unused-vars */
type Posts = {
    userId: number
    id: number
    title: string
    body: string
}

type Movies = {
    _id: string
    title: string
    type: string
    posterImg: string
    rating: number
    url: string
    qualityResolution: string
    genres: string[]
}

type GetMovies = {
    _id: string
    title: string
    type: string
    posterImg: string
    quality: string
    rating: number
    releaseDate: string
    duration: string
    synopsis: string
    trailerUrl: any
    genres: string[]
    directors: string[]
    countries: string[]
    casts: string[]
}

type Streams = {
    provider: string
    url: string
    resolutions: string[]
}

type Years = {
    parameter: string
    numberOfContents: number
    url: string
}

type GetYears = Movies

type Countries = {
    parameter: string
    name: string
    numberOfContents: number
    url: string
}

type GetCountries = Movies

type Series = {
    _id: string
    title: string
    type: string
    posterImg: string
    episode: number
    rating: number
    url: string
    genres: string
}

type GetSeries = {
    _id: string
    title: string
    type: string
    posterImg: string
    synopsis: string
    trailerUrl: string
    genres: string[]
    directors: string[]
    countries: string[]
    casts: string[]
    seasons: string[]
}

type Genres = {
    parameter: string
    name: string
    numberOfContents: number
    url: string
}
