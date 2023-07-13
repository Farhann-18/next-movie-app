/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import dynamic from 'next/dynamic'
import InfiniteScroll from 'react-infinite-scroll-component'

const MovieItems = dynamic(() => import('./MovieItems'), { ssr: true })

type Props = { items: Movies[]; fetchMoreData: any }

const MovieItemsListInfiniteScroll = ({ items, fetchMoreData }: Props) => {
    return (
        <InfiniteScroll
            dataLength={items?.length}
            next={fetchMoreData}
            hasMore={true}
            loader={
                <>
                    <div className="d-flex justify-content-center mx-auto py-5 text-white-50">
                        Sedang memuat...
                    </div>
                </>
            }
            style={{ overflow: 'hidden' }}
        >
            <div className="row row-cols-2 row-cols-lg-6 justify-content-start g-3">
                {items?.map((item, index) => (
                    <div key={index} className="col">
                        {/* <MovieCardItems items={item} /> */}
                        <MovieItems items={item} />
                    </div>
                ))}
            </div>
        </InfiniteScroll>
    )
}

export default MovieItemsListInfiniteScroll
