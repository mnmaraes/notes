// @flow
import React from 'react'

import {connect} from 'react-redux'

import NoteList from 'Notes/Containers/NoteList'

import {styles} from './Styles/Home'

import type {State} from 'store'

const Home = () => (
  <div style={styles.screen}>
    <NoteList />
  </div>
)

const mapStateToProps = (state: State) => {
  return {}
}

const mapDispatchToProps = (dispatch: Function) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
