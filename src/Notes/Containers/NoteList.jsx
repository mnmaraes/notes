// @flow
import React from 'react'

import {connect} from 'react-redux'
import {toPairs, contains} from 'ramda'

import {Preview, FullNote, Callout} from 'Notes/Components'

import NoteCreators from 'Notes/redux'

import {styles} from './Styles/NoteList'

import type {State} from 'store'
import type {Note as NoteType} from 'Notes/redux/noteList'
import type {State as NotesMeta} from 'Notes/redux/createNote'

// Helper Components
const Note = ({note, style, onUpdate, isExpanded, isFocused, toggleNote}) =>
  isExpanded || isFocused
    ? <FullNote
      autofocus={isFocused}
      onUpdate={onUpdate}
      note={note}
      style={style}
      />
    : <Preview onPress={toggleNote} note={note} style={style} />

type Props = {
  notes: {[id: string]: NoteType},
  meta: NotesMeta,
  createNote: () => void,
  updateNote: (
    id: string
  ) => (key: 'title' | 'content') => (newValue: string) => void,
  toggleNote: (id: string) => () => void
}

const Home = ({notes, meta, createNote, updateNote, toggleNote}: Props) => (
  <div style={styles.screen}>
    {toPairs(notes).map(([key, value]: [string, NoteType]) => (
      <Note
        key={key}
        note={value}
        style={styles.note}
        isExpanded={contains(key, meta.expanded)}
        isFocused={key === meta.focused}
        onUpdate={updateNote(key)}
        toggleNote={toggleNote(key)}
      />
    ))}
    <Callout onPress={createNote} style={styles.note} />
  </div>
)

const mapStateToProps = (state: State) => {
  return {...state.notes}
}

const mapDispatchToProps = (dispatch: Function) => {
  return {
    createNote: () => dispatch(NoteCreators.triggerCreation()),
    updateNote: (id: string) => (key: 'title' | 'content') => (
      newValue: string
    ) => dispatch(NoteCreators.updateNote(id, {[key]: newValue})),
    toggleNote: (id: string) => () => dispatch(NoteCreators.toggleExpanded(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
