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
    createNewApartments = (newApartment) => {
      console.log(newApartment);
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
  <h1>Where your apartment dreams are turned into our profit :)</h1>
  <Header />
      <Switch>


                <Route exact path="/" component={ Home } />

                  <Route
                    path="/apartmentindex"
                    render={ (props) => <ApartmentIndex apartments={ this.state.apartments }
                  /> } />

                  { logged_in &&
                    <Route
                      path="/apartmentedit/:id"
                      render={ (props) =>
                        <ApartmentEdit
                          userEditApartment={ this.userEditApartment }
                          current_user={ current_user }
                        />
                      }
                    />
                  }

                  { logged_in &&
                    <Route
                      path="/apartmentnew"
                      render={ (props) =>
                        <ApartmentNew
                          createNewApartment={ this.createNewApartment }
                          current_user={ current_user }
                        />
                      }
                    />
                  }

                <Route
                  path="/apartmentshow/:id"
                  render={ (props) => {
                    let id = props.match.params.id
                    let apartment = this.state.apartments.find(apt => apt.id === parseInt(id))
                    return (
                      <ApartmentShow apartment={ apartment } />
                    )
                  } }
                />

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
