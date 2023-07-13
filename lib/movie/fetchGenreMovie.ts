/* eslint-disable no-unused-vars */
import API from '@/config/api'

async function fetchGenreMovie(id: string, page: number = 1) {
    const controller: AbortController = new AbortController()
    const signal: AbortSignal = controller.signal
    const endpoint: string = `genres/${id}`

    try {
        const response: Response = await fetch(`${API.lk21_API}/${endpoint}?page=${page}`, {
            method: 'GET',
            headers: {
                'X-API-KEY': `${process.env.API_KEY}`,
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            signal: signal,
            cache: "no-store"
        })

        if (!response.ok)
            throw new Error(
                `Failed Fetching Data HTTP Status Code (${response.status})`
            )

        return await response.json()
    } catch (error) {
        controller.abort()
        console.log(`Failed To Fetching Data`)
    }
}

export default fetchGenreMovie
