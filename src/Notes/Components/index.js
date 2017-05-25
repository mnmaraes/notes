// @flow
import React from 'react'

import {EditableText} from '@blueprintjs/core'

import type {Note} from 'Notes/redux/noteList'

type FullProps = {
  note: Note,
  autofocus: boolean,
  style?: Object,
  onUpdate: (key: 'title' | 'content') => (newValue: string) => void,
  onConfirm?: () => void
}
export class FullNote extends React.Component {
  props: FullProps

  fields: {[field: 'title' | 'content']: EditableText} = {}

  static defaultProps = {autofocus: false}

  componentDidMount = () => {
    if (this.props.autofocus) this.focus('title')
  }

  focus = (field: 'title' | 'content') =>
    setTimeout(() => this.fields[field].handleFocus(), 50)

  render = () => {
    const {note, style, onUpdate, onConfirm} = this.props
    return (
      <div className='pt-card pt-elevation-2' style={style}>
        <h2>
          <EditableText
            ref={ref => (this.fields.title = ref)}
            placeholder='Title'
            value={note.title}
            onChange={onUpdate('title')}
            onConfirm={() => this.focus('content')}
          />
        </h2>
        <p>
          <EditableText
            multiline
            ref={ref => (this.fields.content = ref)}
            placeholder='Content'
            value={note.content}
            onChange={onUpdate('content')}
            onConfirm={onConfirm}
          />
        </p>
      </div>
    )
  }
}

type CalloutProps = {
  style: Object,
  onPress: () => void
}
export const Callout = ({style, onPress}: CalloutProps) => (
  <div className='pt-card pt-interactive' style={style} onClick={onPress}>
    <h3 className='pt-icon-large pt-icon-plus pt-text-muted'> Add Note</h3>
  </div>
)

type PreviewProps = {note: Note} & CalloutProps
export const Preview = ({note, style, onPress}: PreviewProps) => (
  <div className='pt-card pt-interactive' style={style} onClick={onPress}>
    <h2>{note.title}</h2>
    <p className='pt-text-muted pt-text-overflow-ellipsis'>{note.content}</p>
  </div>
)
