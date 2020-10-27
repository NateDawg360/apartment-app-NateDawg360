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
      sign_out_route
    } = this.props
    return(
          <>
          <div>
              <Nav>
                  <NavItem>
                      <a href="/">Home</a>
                  </NavItem>
                  <NavItem>
                      <a href="/apartmentindex">|View Apartments| </a>
                  </NavItem>

                    { logged_in &&
                      <>
                        <NavItem>
                          <a href={ sign_out_route }>Sign Out</a>
                        </NavItem>
                        <NavItem>
                          <a href="/apartmentnew">Create a New Apartment</a>
                        </NavItem>
                      </>
                  }
                    { !logged_in &&
                      <>
                        <NavItem>
                          <a href={ sign_in_route }>  |Sign In|</a>
                        </NavItem>
                        <NavItem>
                          <a href={ sign_up_route }></a>
                        </NavItem>
                      </>
                  }
                </Nav>
            </div>
          </>
    )
  }
}
