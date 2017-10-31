import React from 'react'
import PropTypes from 'prop-types'
import {
    Route,
    Redirect
} from 'react-router-dom'
import {connect} from 'react-redux'
import AdminMain from '../pages/admin/AdminMain'

const AdminRoute = ({component: Component, isAuthenticated, isAdmin},...rest) => {
    return <Route {...rest} render={props => (
        isAuthenticated && isAdmin ? (
            <AdminMain>
                <Component {...props}/>
            </AdminMain>
        ) : (
            (isAuthenticated
                ?
                <Redirect to={{
                    pathname: '/not-found',
                    state: {from: props.location}
                }} />
                :
            <Redirect to={{
                pathname: '/login',
                state: {from: props.location}
            }} />
            )
        )
    )}/>
};

AdminRoute.propTypes = {
    component: PropTypes.func.isRequired,
    location: PropTypes.object,
    isAuthenticated: PropTypes.bool.isRequired,
    isAdmin: PropTypes.bool.isRequired
};

// Retrieve data from store as props
function mapStateToProps(store) {
    return {
        isAuthenticated:store.auth.isAuthenticated,
        isAdmin : store.auth.isAdmin
    }
}

export default connect(mapStateToProps)(AdminRoute)