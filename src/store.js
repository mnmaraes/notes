// @flow
import {createStore, combineReducers, applyMiddleware, compose} from 'redux'

import {browserHistory} from 'react-router'
import {routerReducer, routerMiddleware} from 'react-router-redux'

import createSagaMiddleware from 'redux-saga'

// Import Reducers
import {
  INITIAL_STATE as INITIAL_NOTES,
  reducer as notesReducer
} from 'Notes/redux'

// Import Types
import type {
  // eslint-disable-line no-duplicate-imports
  State as NotesState
} from 'Notes/redux'

import rootSaga from 'rootSaga'

export type State = {
  notes: NotesState
}

// Grab the state from a global injected into server-generated HTML
var initial: State = {
  notes: INITIAL_NOTES
}

if (
  window.__PRELOADED_STATE__ !== undefined &&
  window.__PRELOADED_STATE__ !== null
) {
  initial = Object.assign({}, initial, JSON.parse(window.__PRELOADED_STATE__))
}

export const store = (() => {
  const sagaMiddleware = createSagaMiddleware()

  const composeEnhancers = process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
      {
          // Specify extension’s options like name, actionsBlacklist, actionsCreators or immutablejs support if needed
      }
      )
    : compose

  const newStore = createStore(
    combineReducers({
      notes: notesReducer,
      routing: routerReducer
    }),
    initial,
    composeEnhancers(
      applyMiddleware(routerMiddleware(browserHistory), sagaMiddleware)
    )
  )

  sagaMiddleware.run(rootSaga)

  return newStore
})()
