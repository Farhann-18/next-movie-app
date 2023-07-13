/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import { Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function Search() {
    return (
        <Form className="d-flex justify-content-arround search-movie__form">
            <Form.Control
                type="search"
                placeholder="Telusuri..."
                className="rounded d-block-lg w-100 ms-4 navbar-search bg-transparent text-white"
                aria-label="Telusuri..."
            />
            {/* <Button
                variant="dark"
                type="submit"
                className="bg-dark btn-outline-secondary border-0  rounded-0"
            >
                <FontAwesomeIcon icon={faSearch} size={'xl'} />
            </Button> */}
        </Form>
    )
}
