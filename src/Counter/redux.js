// @flow
import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  incrementCounter: ['value'],
  decrementCounter: ['value']
})

export const CounterTypes = Types
export default Creators

/* ------------- Initial State ------------- */
export type State = {
  count: number
}

type ImmutableState = State & Object

export const INITIAL_STATE: ImmutableState = Immutable.from(({
  count: 0
}: State))

/* ------------- Reducers ------------- */
// Update Function
export const update = (updateCall: (a: number) => (b: number) => number) => (
  state: ImmutableState,
  { value }: {value: number}
) =>
  state.update('count', updateCall(value))

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.INCREMENT_COUNTER]: update(a => b => a + b),
  [Types.DECREMENT_COUNTER]: update(a => b => b - a)
})
