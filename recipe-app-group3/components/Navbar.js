import React from "react";
import styles from "@/styles/Home.module.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Navbars = () => {
    return (
        <>
            <Navbar expand="sm" className={`${styles.navbarbg}`}>
                <Container fluid>
                    <Navbar.Brand href="/">
                        <img src="/images/Logo2.png" width={50} height={50} alt="The Flavor Nest Logo"/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-sm`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
                        placement="end"
                        className={styles.offcanvasbg}
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`} className="text-light fs-1"> 
                                The Flavor Nest
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3 mb-1">
                                <Nav.Link className={`text-light fs-5 fw-bold me-5 ${styles.navlinks}`} href="/">Home</Nav.Link>
                                <Nav.Link className={`text-light fs-5 fw-bold me-5 ${styles.navlinks}`} href="/">All Recipes</Nav.Link>
                                <Nav.Link className={`text-light fs-5 fw-bold me-5 ${styles.navlinks}`} href="/">Features</Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    );
}

export default Navbars;
