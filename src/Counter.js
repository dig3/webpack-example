import React from 'react'

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
      <div>
        <span>counter: {counter}</span>
        <button onClick={::this.handleIncrement}>+</button>
        <button onClick={::this.handleDecrement}>-</button>
      </div>
    )
  }
}

Counter.propTypes = {
  counter: React.PropTypes.number.isRequired,
  increment: React.PropTypes.func.isRequired,
  decrement: React.PropTypes.func.isRequired
}
