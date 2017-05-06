// @flow
import React from 'react'

import { connect } from 'react-redux'

import CounterCreators from '../redux'

import { styles } from './Styles/Counter'

import type { State } from '../../store'

type Props = {
  count: number,
  onIncrement: (value: number) => () => void,
  onDecrement: (value: number) => () => void
}

const Counter = ({count, onIncrement, onDecrement}: Props) =>
  <div style={styles.screen}>
    <button onClick={onDecrement(5)}>-5</button>
    <button onClick={onDecrement(1)}>-</button>
    <span>{count}</span>
    <button onClick={onIncrement(1)}>+</button>
    <button onClick={onIncrement(5)}>+5</button>
  </div>

const mapStateToProps = (state: State) => {
  return {
    count: state.counter.count
  }
}

const mapDispatchToProps = (dispatch: Function) => {
  return {
    onIncrement: (value: number) => () =>
      dispatch(CounterCreators.incrementCounter(value)),
    onDecrement: (value: number) => () =>
      dispatch(CounterCreators.decrementCounter(value))
  }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
 )(Counter)
