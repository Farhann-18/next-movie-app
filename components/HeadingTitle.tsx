import React from 'react'

type Props = {
    title: string
}

export default function HeadingTitle({ title }: Props) {
    return (
        <h2 className="fw-normal fs-3 text-white-50 text-wrap text-uppercase mb-3">
            {title}
        </h2>
    )
}
