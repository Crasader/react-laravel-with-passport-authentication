import {connect} from 'react-redux'

import Page from './Page'

const mapStateToProps = state => {
  return {
      isAdmin : !!state.auth.user.admin
  }
};

export default connect(mapStateToProps)(Page)