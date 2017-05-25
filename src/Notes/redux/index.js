// @flow
import {combineReducers} from 'redux'

/* ----- Import Sub Redux(es) ----- */
import ListCreators, {
  NoteListTypes,
  reducer as listReducer,
  INITIAL_STATE as INITIAL_LIST
} from './noteList'

import CreationCreators, {
  NoteCreationTypes,
  reducer as creationReducer,
  INITIAL_STATE as INITIAL_CREATION
} from './createNote'

/* ----- Import Types ----- */
import type {State as ListState} from './noteList'
import type {State as CreationState} from './createNote'

/* ------------- Define Types ------------- */
export type State = {
  notes: ListState,
  meta: CreationState
}

/* ------------- Configure Exports ------------- */
export const INITIAL_STATE = {
  notes: INITIAL_LIST,
  meta: INITIAL_CREATION
}

export const NoteTypes = {
  ...NoteListTypes,
  ...NoteCreationTypes
}

export default {
  ...ListCreators,
  ...CreationCreators
}

export const reducer = combineReducers({
  notes: listReducer,
  meta: creationReducer
})
