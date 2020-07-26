import React, { useState, useEffect } from "react";
//redux
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getItems } from "../../actions/fetchActions";
//react bootstrap
import {
  Card,
  Button,
  Navbar,
  Nav,
  Badge,
  Modal,
  Form,
  FormControl
} from "react-bootstrap";
//assets
import xButton from "../../assets/xButton.png";
import home from "../../assets/home.png";
import logo from "../../assets/logo.png";
//router
import { Link } from 'react-router-dom';

const NavMain = ({
  getItems,
  fetchReducer
}) => {
  useEffect(() => {
    getItems();
  }, []);


  return (
    <>
      {/* navbar */}
      <Navbar className="navbarMain" expand="lg" sticky="top">
        <Navbar.Brand className="ml-1">
        <Link to={"/"}>
          <img src={logo} alt="home" height="35px" width="auto"></img>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link><Link to={"/about"}>About </Link></Nav.Link>
            <Nav.Link><Link to={"/contact"}>Contact</Link></Nav.Link>
            <Nav.Link><Link to={"/price"}>Price</Link></Nav.Link>
          </Nav>
          <Nav className="ml-auto mr-3">
            <Nav.Link><Link to={"/commercial"}>Commercial</Link></Nav.Link>
            <Nav.Link><Link to={"/portrait"}>Portrait</Link></Nav.Link>
            <Nav.Link><Link to={"/modelling"}>Modelling</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

NavMain.propTypes = {
  getItems: PropTypes.func.isRequired,
  fetchReducer: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  fetchReducer: state.fetchReducer.items
});

export default connect(mapStateToProps, { getItems})(
  NavMain
);
