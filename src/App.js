// @flow
import React from 'react'

import { Provider } from 'react-redux'
// import { Router, Route, IndexRoute, browserHistory } from 'react-router'
// import { syncHistoryWithStore } from 'react-router-redux'

import { store } from './store'

import { Counter } from './Counter/Containers'

// import { NotFound } from './Common/Components'

// const history = syncHistoryWithStore(browserHistory, store)

export default () =>
  <Provider store={store}>
    <Counter />
  </Provider>
  // <Provider store={store}>
  //   <Router history={history}>
  //     <Route path='/'>
  //       <IndexRoute component={Counter} />
  //       <Route path='*' component={NotFound} />
  //     </Route>
  //   </Router>
  // </Provider>
