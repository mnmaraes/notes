// @flow
import {createReducer, createActions} from 'reduxsauce'
import Immutable from 'seamless-immutable'

import {pick} from 'ramda'

/* ------------- Types and Action Creators ------------- */
const {Types, Creators} = createActions({
  triggerCreation: null,
  createNote: ['id', 'title', 'content'],
  updateNote: ['id', 'update'],
  deleteNote: ['id']
})

export const NoteListTypes = Types
export default Creators

/* ------------- Initial State ------------- */
export type Note = {
  title: string,
  content: string
}

export type FullNote = {
  title: string,
  content: string,
  id: string
}

export type State = {[key: string]: FullNote}

type ImmutableState = State & Object

export const INITIAL_STATE: ImmutableState = Immutable.from(({}: State))

/* ------------- Reducers ------------- */
// Update Function
const create = (state: ImmutableState, {id, title, content}: FullNote) =>
  state.set(id, {id, title, content})

const sanitizeUpdate = pick(['title', 'content'])
const update = (
  state: ImmutableState,
  {id, update}: {id: string, update: Object}
) => state.update(id, note => Object.assign({}, note, sanitizeUpdate(update)))

const deleteNote = (state: ImmutableState, {id}: {id: string}) =>
  state.without(id)

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.CREATE_NOTE]: create,
  [Types.UPDATE_NOTE]: update,
  [Types.DELETE_NOTE]: deleteNote
})
