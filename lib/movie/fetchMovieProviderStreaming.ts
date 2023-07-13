import API from '@/config/api'

async function fetchMovieProviderStreaming(id: string) {
    const controller: AbortController = new AbortController()
    const Controllersignal: AbortSignal = controller.signal
    const endpoint: string = `movies/${id}/streams`

    try {
        const response: Response = await fetch(`${API.lk21_API}/${endpoint}`, {
            signal: Controllersignal,
            cache: "no-store"
        })

        if (!response.ok)
            throw new Error(
                `Failed Fetching Data HTTP Status: (${response.status})`
            )

        return await response.json()
    } catch (error) {
        controller.abort
        console.log(`Error in data retrieval ${error}`)
    }
}

export default fetchMovieProviderStreaming
