import React, {Component, useState, useEffect} from 'react';
//bootstrap
import {Container,Carousel,Button} from 'react-bootstrap'
//redux
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getItems} from '../../actions/fetchActions';
//router
import { Link } from 'react-router-dom';


const SlideMain = ({getItems,fetchReducer}) => {

    useEffect (()=>{
        getItems();
    },[])

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    const suggestedItems = fetchReducer.slice(0, 2).map((item) => (
      <Carousel.Item key={item.id}>
          <img
            className="d-block w-100"
            src={item.gif}
            alt="First slide"
            height="auto"
            width="100%"
          />
        <Carousel.Caption>
        <h3 className="slideSale">{item.title}</h3>
        </Carousel.Caption>
      </Carousel.Item>
      
    ));
    return (
      <>
        <Carousel activeIndex={index} 
        indicators={false}
        controls={false}
        // interval={null}
        slide={true}
        onSelect={handleSelect}
        >
            {suggestedItems}
        </Carousel>
        </>
      );
}


SlideMain.propTypes = {
    getItems: PropTypes.func.isRequired,
    fetchReducer: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
fetchReducer: state.fetchReducer.items
});

export default connect (mapStateToProps, {getItems})(SlideMain);
