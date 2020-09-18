import React, {Component, Fragment} from 'react';
import { NavLink} from 'reactstrap';
import {connect} from 'react-redux';
import {logout} from '../../actions/authActions';
import PropTypes from 'prop-types';


export class Logout extends Component {

    static propTypes = {
        logout: PropTypes.func.isRequired
    };

    render() {
        return (
            <div>
                <Fragment>
                    <NavLink onClick={this.props.logout} href="#">Logout</NavLink>
                </Fragment>
            </div>
        )
    }
}

export default connect(
    null,
    {logout}
)(Logout);