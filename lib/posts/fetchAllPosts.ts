/* eslint-disable no-unused-vars */
async function fetchAllPosts() {
    const api: string = 'https://jsonplaceholder.typicode.com'
    const endpoint: string = 'posts?_start=10&_limit=10'
    const response: Response = await fetch(`${api}/${endpoint}`)
    if (!response.ok)
        throw new Error(`Failed Fetching Data HTTP Status: ${response.status}`)

    return await response.json()
}

export default fetchAllPosts
