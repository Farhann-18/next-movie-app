import Link from 'next/link'
import HeadingTitle from './HeadingTitle'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

type Props = {
    headingName: string
    links: string
}

export default function ButtonNextToContent({ headingName, links }: Props) {
    return (
        <>
            <div className="d-flex justify-content-between  g-2 flex-wrap mb-3">
                <HeadingTitle title={headingName} />
                <Link
                    href={links}
                    aria-label="Selengkapnya"
                    className="icon-link  link-secondary link-offset-2 link-underline link-underline-opacity-0 p-0 m-0 "
                >
                    <span className="d-inline">
                        Selengkapnya
                        {/* <FontAwesomeIcon icon={faArrowRight} className="ms-2" /> */}
                    </span>
                </Link>
            </div>
            <hr className="text-secondary" />
        </>
    )
}
