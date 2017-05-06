// @flow
import { put } from 'redux-saga/effects'

import CounterCreators from './redux'

// Doubles Every 10th Increment
var incCount = 1
export function * double10th (
  {value}: {value: number}
): Generator<*, *, *> { // eslint-disable-line no-undef
  incCount = (incCount + 1) % 11
  if (incCount === 0) {
    yield put(CounterCreators.incrementCounter(value))
  }
}
