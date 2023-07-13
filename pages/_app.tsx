/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/styles/movies.css'
import '@/styles/globals.css'
import { Fragment } from 'react'
import type { AppProps } from 'next/app'
import type { Page } from '@/types/page'

type AppPropsWithLayout = AppProps & { Component: Page }

export default function App({ Component, pageProps }: AppPropsWithLayout) {
    const getLayout = Component.getLayout ?? ((page) => page)
    const Layout = Component.layout ?? Fragment

    return getLayout(
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}
