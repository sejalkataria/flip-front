import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Header from './components/header/header'
// import Profile from './component/viewProfile/viewProfile'
// import View from './component/view/view';
// import Product from './component/view/productDetail';
// import Cart from './component/cart/cart'
// import Home from './component/view/home'
// import Slider from './component/view/slider'
// import Dashboard from './component/admin/dashboard'

import {connect} from "react-redux";

// import Alert from 'react-s-alert'
// import 'react-s-alert/dist/s-alert-default.css';
// import 'react-s-alert/dist/s-alert-css-effects/slide.css';

class App extends Component {
    render() {
    return (
      <Router>
<Header />
      </Router>
        
      
    )
    }
  }
  const mapStateToProps=(state)=>{
    return({
        token:state.register.token,
        role:state.register.role,
    })
}


export default (connect(mapStateToProps,null)(App))
