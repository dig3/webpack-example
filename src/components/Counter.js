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
      <div className="panel panel-default">
        <div className="panel-body">
          <div className="row">
            <div className="col-md-2">
              <span>Counter: <kbd>{counter}</kbd></span>
            </div>
            <div className="col-md-2">
              <div className="btn-group btn-group-xs" role="group" aria-label="...">
                <button type="button" className="btn btn-success"
                  onClick={::this.handleIncrement}
                >
                  <span className="glyphicon glyphicon-plus"
                    aria-hidden="true"
                  ></span>
                </button>
                <button type="button" className="btn btn-danger"
                  onClick={::this.handleDecrement}
                >
                  <span className="glyphicon glyphicon-minus"
                    aria-hidden="true"
                  ></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Counter.propTypes = {
  counter: React.PropTypes.number.isRequired,
  increment: React.PropTypes.func.isRequired,
  decrement: React.PropTypes.func.isRequired
}
