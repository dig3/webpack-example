import { connect } from 'react-redux'

import Other from '../components/Other'

export default connect((state, ownProps) => ({
  url: ownProps.location.pathname
}))(Other)
