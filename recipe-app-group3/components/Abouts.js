import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/Home.module.css";

const Abouts = () => {
    return(
        <>
            <Container fluid="sm">
                <Row>
                    <Col className={`text-center  ${styles.abouttitle}`}>
                        <h1>A CULINARY ADVENTURE FOR YOUR TASTE BUDS</h1>
                        
                        <p>
                        Welcome to Flavor Nest, where culinary creativity takes flight and taste sensations soar to new heights! 
                        Our carefully crafted recipes promise to transport you on a delicious journey, blending unique flavors and textures that will leave your taste buds dancing with delight.
                        </p>
                    
                    </Col>
                </Row>

            </Container>
        </>
    )
}

export default Abouts