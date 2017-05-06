// @flow
import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

const render = (Component) =>
  ReactDOM.render(
    <Component />,
    document.getElementById('root')
  )

render(App)

if (module.hot) {
  // $FlowFixMe
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default
    render(NextApp)
  })
}
