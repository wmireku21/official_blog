import React, {Component, Fragment} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';

import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import RegisterModal from './auth/RegisterModal';
import LoginModal from './auth/LoginModal';
import Logout from './auth/Logout';


class AppNavBar extends Component {
    state = {
        isOpen: false
    }

    static propTypes = {
        auth: PropTypes.object.isRequired
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        
        const { isAuthenticated, user} = this.props.auth;
        
        const authLinks = (
            <Fragment>
                <NavItem>
                    <span className="navbar-text mr-3">
                        <strong>
                            {user ? `Welcome ${user.name}` : ''}
                        </strong>
                    </span>
                </NavItem>
                <NavItem>
                    <NavLink><Link to="/about">About</Link></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink><Link to="/contact">Contact</Link></NavLink>
                </NavItem>
                 <NavItem>
                    <Logout/>
                </NavItem>
            </Fragment>
        );

        const guestLinks = (
            <Fragment>
                <NavItem>
                    <NavLink><Link to="/about">About</Link></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink><Link to="/contact">Contact</Link></NavLink>
                </NavItem>
                <NavItem>
                    <RegisterModal />
                </NavItem>
                <NavItem>
                    <LoginModal />
                </NavItem>
            </Fragment>
        );

        return (
            <div>
                <Navbar color="dark" dark expand="sm" className="">
                    <Container>
                        <NavbarBrand><Link to="/">Just Graduated</Link></NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen= {this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                               { isAuthenticated ? authLinks : guestLinks }
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, null)(AppNavBar);
