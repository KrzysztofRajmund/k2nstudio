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
  Carousel
} from "react-bootstrap";
//redux
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProductDetails,getItems } from "../../actions/fetchActions";
//components
import ThumbnailCarousel from "./thumbnailCarousel";
//assets
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import heart from "../../assets/heart.png";
import creditCards from "../../assets/creditCards.png";

const GetLoose = ({ getProductDetails, selectedProduct, match, getItems,
  fetchReducer }) => {

    useEffect(() => {
      getItems();
      window.scrollTo(0,0)
    },[]);
    


  const getProduct = (
    <>
      <Container className="productTitle col-12">
        <Col className="col-xs-12 col-md-4">
        <hr/> 
      <div  className="subtitleLargest">    
      Get loose with your project...
      </div> 
      </Col>
      <Col className="col-xs-12 col-md-4 col-xl-3">
          <Navbar>
            <Nav>  
      
              <Nav.Link className="footerLink">
            
                <small>Features</small>
              </Nav.Link>
            </Nav>
            <Nav className="mr-5">
            <Nav.Link className="footerLink" href="#home" id="couponTitle">
          <img 
                  src={creditCards}
                  alt="img"
                  height="20px"
                  width="auto"
                ></img>
          </Nav.Link>
            </Nav>
          </Navbar>
          </Col>
      </Container>
    </>
  );


  return (
    <>
      <div>{getProduct}</div>
      <div>
        <ThumbnailCarousel />
      </div>
    </>
  );
};

GetLoose.propTypes = {
  getProductDetails: PropTypes.func.isRequired,
  selectedProduct: PropTypes.object.isRequired,
  getItems: PropTypes.func.isRequired,
  fetchReducer: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  selectedProduct: state.fetchReducer.productDetails,
  fetchReducer: state.fetchReducer.items
});

export default connect(mapStateToProps, { getProductDetails,getItems})(GetLoose);
