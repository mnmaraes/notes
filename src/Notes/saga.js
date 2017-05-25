// @flow
import {put} from 'redux-saga/effects'

import {v4 as createId} from 'uuid'

import NoteCreators from './redux'

// Doubles Every 10th Increment
export function * createNote ({value}: {value: number}): Generator<*, *, *> {
  const id = createId()

  yield put(NoteCreators.createNote(id, '', ''))
  yield put(NoteCreators.setFocus(id))
}
