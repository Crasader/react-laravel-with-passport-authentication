// import libs
import {connect} from 'react-redux'

// import components
import Page from './Page'

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        isAdmin : !!state.auth.user.admin
    }
};


export default connect(mapStateToProps)(Page)