// @flow
import {all, takeEvery} from 'redux-saga/effects'

/* ------------ Services ----------- */
// Nothing For Now, But Service Imports Go Here

/* ------------- Types ------------- */
import {NoteTypes} from 'Notes/redux'

/* ------------- Sagas ------------- */
import {createNote} from 'Notes/saga'

/* ------------- Connect Types To Sagas ------------- */
export default function * root (): Generator<*, *, *> {
  // eslint-disable-line no-undef
  yield all([
    // Note Sagas
    takeEvery(NoteTypes.TRIGGER_CREATION, createNote)
  ])
}
