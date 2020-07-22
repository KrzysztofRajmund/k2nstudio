import React, { Component } from "react";
import {
  Card,
  Container,
  Button,
  Navbar,
  Nav,
  Row,
  Col
} from "react-bootstrap";
//assets
import facebook from ".././assets/facebook.png";
import twitter from ".././assets/twitter.png";
import promoCode from ".././assets/promoCode.png";
import creditCards from ".././assets/creditCards.png";
import logo from ".././assets/logo.png"

const Footer = () => {
  return (
    <footer>
      {/* FOOTER TOP */}
      <Navbar className="footerTop">
        <Nav
          className="
        footerTopElementOne
         ml-5 mr-auto"
        >
          <img
            id="promoCode"
            src={promoCode}
            alt="img"
            height="30px"
            width="30px"
          ></img>
          <Nav.Link className="footerLink" href="#home" id="couponTitle">
            <img src={creditCards} alt="img" height="30px" width="auto"></img>
          </Nav.Link>
        </Nav>
        <Nav className="mr-5">
          <Nav.Link href="#home">
            {" "}
            <img src={facebook} alt="img" height="30px" width="30px"></img>
          </Nav.Link>
          <Nav.Link href="#features">
            <img src={twitter} alt="img" height="30px" width="30px"></img>
          </Nav.Link>
        </Nav>
      </Navbar>
      {/* FOOTER BOTTOM */}
      <Container className="footerBottom row-12 ">
        <Col>
          <Row className="textCentre row-12">
            <img
              src={logo}
              className="mt-2"
              alt="home"
              height="45px"
              width="auto"
            ></img>
          </Row>

          <Row className="row-12 textCentre mt-1">
          info@k2nstudio.com
          </Row>
          <Row className="row-12 textCentre mt-1">
          +48 530 003 833
          </Row>
          <Row className="row-12 textCentre mt-1">
          <small>SZCZECIN | BERLIN | WARSAW | LONDON</small>
          </Row>
        </Col>
      </Container>
    </footer>
  );
};

export default Footer;
