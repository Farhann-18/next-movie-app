/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-unused-vars */
import Link from 'next/link'
import Image from 'next/image'
import { Container, Navbar, Nav } from 'react-bootstrap'

function HeaderNav() {
    return (
        <Navbar
            fixed="top"
            expanded
            expand="lg"
            bg="black"
            className="border-bottom border-dark"
        >
            <Container>
                <Link
                    aria-label="Halaman Utama"
                    title="Halaman Utama"
                    shallow
                    href="/"
                    className="navbar-brand mx-auto user-select-none"
                >
                    <Image
                        src="next.svg"
                        width="120"
                        height="50"
                        alt="Next Movie Logo"
                        className="object-fit-fill logo "
                        priority
                    />
                </Link>
                <Navbar.Collapse className="d-flex  d-none d-xxl-block d-lg-block  justify-content-between  g-2">
                    {/* <Search /> */}
                    <Nav className="ms-auto">
                        <Link
                            className="nav-link text-white  link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover fw-normal text-capitalize fs-5 mx-md-2"
                            href="/"
                        >
                            Beranda
                        </Link>
                        <Link
                            className="nav-link text-white  link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover  text-capitalize fs-5 mx-md-2 "
                            href="/movie"
                        >
                            Film Unggulan
                        </Link>
                        <Link
                            className="nav-link text-white  link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover  text-capitalize fs-5 mx-md-2 "
                            href="/genre"
                        >
                            Genre
                        </Link>
                        <Link
                            className="nav-link text-white  link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover  text-capitalize fs-5 mx-md-2 "
                            href="/years"
                        >
                            Tahun
                        </Link>
                        <Link
                            className="nav-link text-white  link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover  text-capitalize fs-5 mx-md-2 "
                            href="/country"
                        >
                            Negara
                        </Link>

                        <Link
                            className="nav-link text-white link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover  text-capitalize fs-5 mx-md-2 "
                            href="/"
                        >
                            Butuh Bantuan?
                        </Link>
                    </Nav>

                    {/* <Search /> */}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default HeaderNav
