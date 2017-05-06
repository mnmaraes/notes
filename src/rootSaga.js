// @flow
import { takeEvery } from 'redux-saga/effects'

/* ------------ Services ----------- */
// Nothing For Now, But Service Imports Go Here

/* ------------- Types ------------- */
import { CounterTypes } from './Counter/redux'

/* ------------- Sagas ------------- */
import {
  double10th
} from './Counter/saga'

/* ------------- Connect Types To Sagas ------------- */
export default function * root (
): Generator<*, *, *> { // eslint-disable-line no-undef
  yield [
    // Counter Sagas
    takeEvery(CounterTypes.INCREMENT_COUNTER, double10th)
  ]
}
