// @flow
import {createReducer, createActions} from 'reduxsauce'
import Immutable from 'seamless-immutable'

import {without} from 'ramda'

/* ------------- Types and Action Creators ------------- */
const {Types, Creators} = createActions({
  setFocus: ['id'],
  toggleExpanded: ['id']
})

export const NoteCreationTypes = Types
export default Creators

/* ------------- Initial State ------------- */
export type State = {
  focused?: string,
  expanded: string[]
}

type ImmutableState = State & Object

export const INITIAL_STATE: ImmutableState = Immutable.from(
  ({
    expanded: []
  }: State)
)

/* ------------- Reducers ------------- */
// Update Function
const focus = (state: ImmutableState, {id}: {id: string}) =>
  state.set('focused', id)

const toggle = (state: ImmutableState, {id}: {id: string}) =>
  state.update(
    'expanded',
    expanded =>
      expanded.indexOf(id) !== -1 ? without(id, expanded) : expanded.concat(id)
  )

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_FOCUS]: focus,
  [Types.TOGGLE_EXPANDED]: toggle
})
