import Button from 'react-bootstrap/Button';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser, faShoppingCart, faSearch, faMapMarkerAlt, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import '../styles/Navbar.css'; // Import the CSS file for custom styles

function NavScrollExample() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary shadow-navbar">
            <Container fluid>
                {/* Replace text with logo image */}
                <Navbar.Brand href="#">
                    <img
                        src="https://thumbs.dreamstime.com/b/yummy-emoticon-happy-smile-tongue-enjoying-great-taste-delicious-logo-isolated-white-background-vector-illustration-131395410.jpg"
                        alt="Delicious Logo"
                        className="logo" // Add the logo class here
                    />
                </Navbar.Brand>


                {/* Location Icon and Text */}
                <span className="ms-3 me-3 d-flex align-items-center">
                    <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" />
                    <div className="ms-1 d-flex flex-column">
                        <div className="d-flex align-items-center">
                            <span>Hyderabad</span>
                            <FontAwesomeIcon icon={faChevronDown} size="sm" className="ms-1" />
                        </div>
                        <span className="text-muted" style={{ fontSize: '0.9rem' }}>Telangana, India</span>
                    </div>
                </span>

                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                        {/* You can add Nav Links here if needed */}
                    </Nav>
                    {/* Centering the search form */}
                    <div className="d-flex justify-content-center flex-grow-1 position-relative">
                        <Form className="d-flex w-50 position-relative">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2 pe-5"
                                aria-label="Search"
                            />
                            <span className="position-absolute end-0 top-50 translate-middle-y pe-3">
                                <FontAwesomeIcon icon={faSearch} />
                            </span>
                        </Form>
                    </div>
                    {/* Icons on the right side of the navbar */}
                    <div className="d-flex align-items-center ms-3">
                        <Button variant="link" className="text-decoration-none button-link">
                            <FontAwesomeIcon icon={faBars} size="lg" /> Categories
                        </Button>
                        <Button variant="link" className="text-decoration-none button-link ms-3">
                            <FontAwesomeIcon icon={faUser} size="lg" /> Login
                        </Button>
                        <Button variant="link" className="text-decoration-none button-link ms-3">
                            <FontAwesomeIcon icon={faShoppingCart} size="lg" /> Cart
                        </Button>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavScrollExample;