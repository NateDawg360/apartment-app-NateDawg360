import React, { Component } from 'react'

import {
  BrowserRouter as  Router,
  Route,
  Switch
} from 'react-router-dom'
import { Nav,  NavLink, NavItem } from 'reactstrap'


export default class Footer extends Component {
  render() {
    const {
      logged_in,
      sign_in_route,
      sign_up_route,
      sign_out_route,
    } = this.props
    return(
          <>
          <div>
              <Nav>
                  <NavItem>
                      <NavLink href="/">Home</NavLink>
                  </NavItem>
                  <NavItem>
                      <NavLink href="/apartmentindex">Apartment Index</NavLink>
                  </NavItem>
                    { logged_in &&
                      <NavItem>
                        <a href={sign_out_route}>Log Out</a>
                      </NavItem>
                    }
                    { !logged_in &&
                      <>
                      <NavItem>
                        <a href={sign_in_route}>Log In</a>
                      </NavItem>
                      </>
                    }
                </Nav>
            </div>
          </>
    )
  }
}
