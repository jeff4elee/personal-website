import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import PropTypes from 'prop-types'
import './css/Navigation.css'

class NavigationBar extends Component {
    render() {
        return (
            <Collapse isOpen={true} navbar>
            
            <Navbar className="fixed-top navigation" toggleable>
                <NavbarToggler right  />
                <NavbarBrand href="#home">KnowledgeTree</NavbarBrand>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="#mission">Mission</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#roadmap">Roadmap</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#about">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#technical">Technical</NavLink>
                        </NavItem>
                    </Nav>
            </Navbar>

            </Collapse>

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
