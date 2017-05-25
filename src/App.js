// @flow
import React from 'react'

import {Provider} from 'react-redux'
import {Route} from 'react-router'
import {BrowserRouter} from 'react-router-dom'
import {createBrowserHistory} from 'history'
import {syncHistoryWithStore} from 'react-router-redux'

import {store} from './store'

import {Home} from './Core/Containers'

const history = syncHistoryWithStore(createBrowserHistory(), store)

export default () => (
  <Provider store={store}>
    <BrowserRouter history={history}>
      <Route path='/' component={Home} />
    </BrowserRouter>
  </Provider>
)
