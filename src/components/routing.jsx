import React from 'react';
//redux
import {Provider} from 'react-redux';
import store from '../store'
//routing
import {
  BrowserRouter as
  Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
//components
import NavMain from './navbar/navMain';
import Footer from './footer';
import MainPage from './homePage/mainPage';
import ProductDetails from './productsPage/productDetails';
import Commercial from './portfolio/Commercial';
import Portrait from './portfolio/Portrait';
import Modelling from './portfolio/Modelling';

const Routing = (props) => {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/" component={NavMain} />
        <Switch>
          <Route path="/commercial" component={Commercial}/>
          <Route path="/portrait" component={Portrait}/>
          <Route path="/modelling" component={Modelling}/>
          <Route path="/:id" component={ProductDetails} />
          <Route path="/" component={MainPage} />
        </Switch>
        <Route path="/" component={Footer} />
      </Router>
    </Provider>
  );
}

export default Routing;
