/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm, faSearch, faHomeAlt } from '@fortawesome/free-solid-svg-icons'

export default function BottomNav() {
    return (
        <nav className="navbar  navbar-white bg-white text-dark shadow-none navbar-expand fixed-bottom d-md-none d-lg-none d-xl-none border border-top">
            <ul className="navbar-nav nav-justified w-100">
                <li className="nav-item">
                    <a href="/" className="nav-link text-center">
                        <FontAwesomeIcon icon={faHomeAlt} size={'lg'} />
                        <span className="small d-block">Home</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link text-center">
                        <FontAwesomeIcon icon={faSearch} size={'lg'} />
                        <span className="small d-block">Search</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link text-center">
                        <FontAwesomeIcon icon={faFilm} size={'lg'} />
                        <span className="small d-block">Movie</span>
                    </a>
                </li>

                <li className="nav-item">
                    <a href="#" className="nav-link text-center">
                        <svg
                            width="1.5em"
                            height="1.5em"
                            viewBox="0 0 16 16"
                            className="bi bi-person"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M10 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6 5c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"
                            />
                        </svg>
                        <span className="small d-block">Profile</span>
                    </a>
                </li>
            </ul>
        </nav>
    )
}
