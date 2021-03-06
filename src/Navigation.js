import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import PropTypes from 'prop-types'
import './css/Navigation.css'

class NavigationBar extends Component {
    render() {
        return (
            
            <Navbar className="fixed-top navigation" toggleable>
                <NavbarBrand href="#home">Home</NavbarBrand>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="#about">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#experience">Experience</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#contact">Contact</NavLink>
                        </NavItem>
                    </Nav>
            </Navbar>


        );
    }
}

Navbar.propTypes = {
    light: PropTypes.bool,
    inverse: PropTypes.bool,
    full: PropTypes.bool,
    fixed: PropTypes.string,
    color: PropTypes.string,
    role: PropTypes.string,
    toggleable: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
    // pass in custom element to use
}

NavbarBrand.propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
    // pass in custom element to use
}

export default NavigationBar;
