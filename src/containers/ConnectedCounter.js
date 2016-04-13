import { connect } from 'react-redux'

import Counter from '../components/Counter'

export default connect((state) => ({
  counter: state.counter
}), (dispatch) => ({
  increment: () => dispatch({ type: 'INCREMENT' }),
  decrement: () => dispatch({ type: 'DECREMENT' })
}))(Counter)
