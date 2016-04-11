import React from 'react'

export function connect(mapStateToProps, mapDispatchToProps) {
  return (WrappedComponent) => {
    class Connect extends React.Component {
      constructor(props, context) {
        super(props, context)
        this.store = context.store
        this.store.subscribe(::this.forceUpdate)
      }

      render() {
        const { getState, dispatch } = this.context.store
        let mappedState = mapStateToProps(getState(), this.props)
        let mappedDispatch = mapDispatchToProps(dispatch, this.props)

        return (
          <WrappedComponent {...mappedState} {...mappedDispatch} {...this.props} />
        )
      }
    }

    Connect.contextTypes = {
      store: React.PropTypes.object
    }

    return Connect
  }
}

export class Provider extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.store = props.store
  }

  getChildContext() {
    return {
      store: this.store
    }
  }

  render() {
    return React.Children.only(this.props.children)
  }
}

Provider.childContextTypes = {
  store: React.PropTypes.object
}
