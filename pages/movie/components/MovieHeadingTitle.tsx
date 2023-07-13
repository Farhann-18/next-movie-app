/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

type Props = { title: string }

export default function MovieHeadingTitle({ title }: Props) {
    return (
        <div className="d-flex justify-content-start">
            <h3 className="fw-medium fs-4 text-white text-wrap text-uppercase mb-3">
                {title}
            </h3>
        </div>
    )
}
