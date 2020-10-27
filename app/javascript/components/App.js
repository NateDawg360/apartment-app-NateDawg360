import React from "react"
import Header from './components/Header.js'
import Footer from './components/Footer.js'

import ApartmentEdit from './pages/ApartmentEdit.js'
import ApartmentIndex from './pages/ApartmentIndex.js'
import ApartmentNew from './pages/ApartmentNew.js'
import ApartmentShow from './pages/ApartmentShow.js'

import NotFound from './pages/NotFound.js'

import PropTypes from "prop-types"
import {
  BrowserRouter as  Router,
  Route,
  NavLink,
  Switch
} from 'react-router-dom'
import { Nav, NavItem } from 'reactstrap'
import AboutUs from './pages/AboutUs'
import LearnMore from './pages/LearnMore'
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
      sign_out_route,
    } = this.props
    return (
      <Router>

      <h2>Hello world!</h2>
      <Header />

          <h1>This is a React Component</h1>
            <Switch>
              <Route exact path="/" component={ Home } />

              <Route path="/apartmentindex" component={ ApartmentIndex } />
              <Route path="/apartmentedit" component={ ApartmentEdit } />
              <Route path="/apartmentnew" component={ ApartmentNew } />
              <Route path="/apartmentshow/:id" component={ ApartmentShow } />

              <Route path="/about" component={ AboutUs } />
              <Route path="/learn" component={ LearnMore } />
            </Switch>
        { logged_in &&
          <div>
            <a href={sign_out_route}>Log Out</a>
          </div>
        }

        { !logged_in &&
          <div>
            <a href={sign_in_route}>Log In</a>
          </div>
        }
        <Footer />

      </Router>
    );
  }
}

export default App
