/* eslint-disable no-unused-vars */
'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

type Props = {
    title?: string
}

export default function ButtonBackToContent({ title }: Props) {
    const handleButtonClick = () => {
        history.back()
    }

    return (
        <div className="d-flex align-content-start g-2 mb-3">
            <button
                title="Kembali"
                onClick={handleButtonClick}
                className="btn btn-outline-none text-body p-0 m-0"
            >
                <span className="d-inline">
                    <FontAwesomeIcon icon={faArrowLeft} />{' '}
                    {title ? title : 'Kembali'}
                </span>
            </button>
        </div>
    )
}
