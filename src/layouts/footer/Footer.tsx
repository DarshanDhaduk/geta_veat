import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Container } from "react-bootstrap/lib/Tab";
const Footer: React.FC<any> = () => {
  return (
    <>
        <Row className="footer-bg">
          <Col className="text-center justify-content-center">
            <Button className="consultation-button">For consultation</Button>
          </Col>
          <Col className="text-center justify-content-center">
            <Button className="Order-button">Order a vet home</Button>
          </Col>
        </Row>
    </>
  );
};

export default Footer;
