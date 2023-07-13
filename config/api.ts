const API = {
    fake_API: process.env.FAKE_API_BASE_URL,
    lk21_API:
        process.env.NODE_ENV === 'development'
            ? process.env.API_BASE_URL
            : process.env.API_BASE_URL,
}

export default API
