import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/Home.module.css";

const Footer = () =>{
    return (
        <>
            <Container fluid >
                <Row>
                    <Col className={`text-center ${styles.footerbg}`}>
                        <img src="/images/logo.png" width={100} height={100}/>
                    </Col>
                    
                </Row>
            </Container>
        </>
    );
}

export default Footer