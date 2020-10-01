import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const Footer = () => {
    return(
      <Container className="mt-auto py-5">
        <Row>
          <Col xs={6} md={4}>
            <p className="h4">Game Analysis</p>
            <p>mail@address.it</p>
          </Col>
          <Col xs={6} md={{span: 4, offset: 4}} >
            <p>Designed by <a href="https://www.linkedin.com/in/alessioromu" className="text-dark">Alessio Romualdo</a></p>
            <p>Developed by <a href="https://gianmarcorandazzo.it/" className="text-dark">Gianmarco Randazzo</a></p>
          </Col>
        </Row>
      </Container>
    )
}

export default Footer;
