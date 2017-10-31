// import libs
import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

// import components
import Navigation from './common/navigation'
import MainFooter from './common/mainFooter'

class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Navigation/>
                <main className="fadeIn animated">
                    { this.props.children }
                </main>
                <MainFooter/>
            </div>
        );
    }
}

Main.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
    children: PropTypes.node.isRequired,
    dispatch: PropTypes.func.isRequired,

};

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        user: state.auth.user
    }
};

export default connect(mapStateToProps)(Main)



