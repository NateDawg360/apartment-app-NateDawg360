import React from "react"

import Header from './components/Header'
import Footer from './components/Footer'

import ApartmentEdit from './pages/ApartmentEdit'
import ApartmentIndex from './pages/ApartmentIndex'
import ApartmentNew from './pages/ApartmentNew'
import ApartmentShow from './pages/ApartmentShow'

import NotFound from './pages/NotFound'

import PropTypes from "prop-types"
import {
  BrowserRouter as  Router,
  Route,
  Switch
} from 'react-router-dom'

import { Nav,  NavLink, NavItem } from 'reactstrap'

import AboutUs from './pages/AboutUs'

import Home from './pages/Home'

import mockApartments from './mockApartments.js'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      apartments: mockApartments
    }
  }
  render () {
    const {
      logged_in,
      sign_in_route,
      sign_up_route,
      sign_out_route,
    } = this.props
    return (
  <Router>

      <h2>Apartment App</h2>
      <Header />

          <h1>Where your apartment dreams are turned into our profit :)</h1>
            <Switch>
              <Route path="/" component={ Home } />

              <Route path="/apartmentindex" component={ ApartmentIndex } />
              <Route path="/apartmentedit" component={ ApartmentEdit } />
              <Route path="/apartmentnew" component={ ApartmentNew } />
              <Route path="/apartmentshow/:id" component={ ApartmentShow } />

              <Route path="/about" component={ AboutUs } />
              <Route component={ NotFound } />
            </Switch>

        <Footer
        logged_in={ logged_in }
        sign_in_route={ sign_in_route }
        sign_up_route={ sign_up_route }
        sign_out_route={ sign_out_route }/>

  </Router>
    );
  }
}

export default App
