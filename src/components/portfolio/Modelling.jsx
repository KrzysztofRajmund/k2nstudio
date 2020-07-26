import React, { Component, useState, useEffect } from "react";
//router
import { Route, Switch, Link, useLocation } from "react-router-dom";
//react-bootstrap
import {
  Container,
  Button,
  Jumbotron,
  Card,
  CardGroup,
  Row,
  Col,
  Nav,
  Navbar,
} from "react-bootstrap";
//redux
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProductDetails, getItems } from "../../actions/fetchActions";

//assets
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";

const Modelling = ({
  getProductDetails,
  selectedProduct,
  match,
  getItems,
  fetchReducer,
}) => {
  useEffect(() => {
    var paramProduct = match.params.id;
    getProductDetails(paramProduct);
    console.log(match, "match for params");
  }, [match]);

  useEffect(() => {
    getItems();
    window.scrollTo(0, 0);
  }, []);

  const getImages = fetchReducer.map((item) => (
    <Card key={item.id} className="col-md-6">
      <Card.Img variant="top" src={item.url} />
  {/* <button>{item.id}</button> */}
    </Card>
  ));

  return (
    <>
      <Container className="productTitle col-12">
        <Col className="col-xs-12 col-md-4">
          <hr />
          <div className="subtitleLargest">Modelling</div>
        </Col>
        <Col className="col-xs-12 col-md-4 col-xl-3">
          <Navbar>
            <Nav>
              <Nav.Link className="footerLink" href="#features">
                <small>Features</small>
              </Nav.Link>
            </Nav>
            <Nav className="mr-5">
              <Nav.Link href="https://www.facebook.com/k2nstudio/">
                {" "}
                <img src={facebook} alt="img" height="30px" width="30px"></img>
              </Nav.Link>
              <Nav.Link href="https://www.instagram.com/k2nstudio/">
                <img src={instagram} alt="img" height="30px" width="30px"></img>
              </Nav.Link>
            </Nav>
          </Navbar>
        </Col>
      </Container>
      <Container className="portfolioCard col-12">
  {getImages}
      </Container>
    </>
  );
};

Modelling.propTypes = {
  getProductDetails: PropTypes.func.isRequired,
  selectedProduct: PropTypes.object.isRequired,
  getItems: PropTypes.func.isRequired,
  fetchReducer: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  selectedProduct: state.fetchReducer.productDetails,
  fetchReducer: state.fetchReducer.items,
});

export default connect(mapStateToProps, { getProductDetails, getItems })(
  Modelling
);
