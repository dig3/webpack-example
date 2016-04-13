import React from 'react'

import './Counter.scss'

export default class Counter extends React.Component {
  handleIncrement(e) {
    const { increment } = this.props
    e.preventDefault()
    increment()
  }

  handleDecrement(e) {
    const { decrement } = this.props
    e.preventDefault()
    decrement()
  }

  render() {
    const { counter } = this.props
    return (
      <div className="counter">
        <span>counter: {counter}</span>
        <button className="counter-button"
          onClick={::this.handleIncrement}
        >+</button>
        <button className="counter-button"
          onClick={::this.handleDecrement}
        >-</button>
      </div>
    )
  }
}

Counter.propTypes = {
  counter: React.PropTypes.number.isRequired,
  increment: React.PropTypes.func.isRequired,
  decrement: React.PropTypes.func.isRequired
}
