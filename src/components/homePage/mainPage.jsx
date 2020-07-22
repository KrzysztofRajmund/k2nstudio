import React from 'react';

//components
// import JumbotronSale from './jumbotronSale';
import SlideMain from './slideMain';
import Discover from './discover';
import GetLoose from './../productsPage/getLoose';


const MainPage = (props) => {
  return (

    
      <>
      <SlideMain />
      <GetLoose/>
      <Discover/>
      </>
    
  );
}

export default MainPage;
