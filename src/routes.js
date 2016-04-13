import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'

import Layout from './components/Layout'
import Home from './components/Home'
import ConnectedCounter from './containers/ConnectedCounter'
import ConnectedOther from './containers/ConnectedOther'

export default [
  <Route path="/" component={Layout}>
    <IndexRoute component={Home} />
    <Route path="counter" component={ConnectedCounter} />
    <Route path="other" component={ConnectedOther} />
    <Redirect from="*" to="/" />
  </Route>
]
