import React, {useState, useEffect} from 'react';
//react-bootstrap
import {Container,Carousel,Card,CardGroup,Row} from 'react-bootstrap'
//redux
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getItems, getProductDetails} from '../../actions/fetchActions';
//router
import { Link } from 'react-router-dom';







const ThumbnailCarousel = ({getItems,getProductDetails, fetchReducer,selectedProduct }) => {

    useEffect (()=>{
        getItems();
    },[])

    // carousel useState
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
   
    const productImages = fetchReducer.slice(3,7).map(item=>(
      <Card key={item.id} className="thumbnailCarouselRow">
      
        <Card.Img variant="top"src={item.verticalCardUrl} height="100%"/>
        
      </Card>
    ));
    const productImagesTwo = fetchReducer.slice(8,12).map(item=>(
      <Card key={item.id} 
      className="thumbnailCarouselRow" 
  >    
        <Card.Img variant="top"src={item.verticalCardUrl}/>
        
      </Card>
    ));
   
    return (
      <>
          {/* carousel */}
          <Container className="col-12" >
        <Carousel 
        className="thumbnailCarousel" 
        activeIndex={index}
        interval={null}
        indicators={false}
        onSelect={handleSelect}>
        
          <Carousel.Item>
          <Row className="col-12">
            <CardGroup>
          {productImages}
          </CardGroup>
          </Row>
          </Carousel.Item>
          <Carousel.Item>
          <Row className="col-12">
            <CardGroup>
          {productImagesTwo}
          </CardGroup>
          </Row>
          </Carousel.Item>
         
        </Carousel>
        </Container>
        </>
      );
}


ThumbnailCarousel.propTypes = {
    getItems: PropTypes.func.isRequired,
    getProductDetails: PropTypes.func.isRequired,
    fetchReducer: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
fetchReducer: state.fetchReducer.items,
selectedProduct: state.fetchReducer.productDetails
});

export default connect (mapStateToProps,{getItems, getProductDetails})(ThumbnailCarousel);
