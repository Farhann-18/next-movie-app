/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import Link from 'next/link'

export default function MovieButtonBack() {
    return (
        <div className="d-flex justify-content-start mb-3 ">
            <Link
                onClick={() => {
                    history.back(),
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
                aria-label="Kembali Halaman Sebelumnya"
                title="Kembali Halaman Sebelumnya"
                href="#"
                className="text-white link-offset-2 link-underline link-underline-opacity-0 fst-normal fs-5"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="currentColor"
                    className="bi bi-arrow-left me-3"
                    viewBox="0 0 16 16"
                >
                    <path
                        fillRule="evenodd"
                        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                    />
                </svg>
                Kembali
            </Link>
        </div>
    )
}
