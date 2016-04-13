import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'

import Layout from './components/Layout'

export default [
  <Route path="/" component={Layout}>
    <IndexRoute
      getComponent={(loc, cb) =>
        require.ensure([], (require) =>
          cb(null, require('./components/Home').default)
        )
      }
    />
    <Route path="counter"
      getComponent={(loc, cb) =>
        require.ensure([], (require) =>
          cb(null, require('./containers/ConnectedCounter').default)
        )
      }
    />
    <Route path="other"
      getComponent={(loc, cb) =>
        require.ensure([], (require) =>
          cb(null, require('./containers/ConnectedOther').default)
        )
      }
    />
    <Redirect from="*" to="/" />
  </Route>
]
