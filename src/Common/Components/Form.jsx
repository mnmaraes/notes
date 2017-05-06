// @flow
import React from 'react'

type Validation = {
  valid: boolean,
  errorMessage?: string
}

type Field = {
  name: string,
  label?: string,
  type?: string,
  validation?: (value: any, state: Object) => Validation,
  placeholder?: string,
  initial?: string
}

type Props = {
  fields: Field[],
  onSubmit: (value: Object) => void,
  submitAction?: string
}

type State = {
  submitted: boolean,
  [key: string]: any
}

const capitalize = (value: string) =>
  value.charAt(0).toUpperCase() + value.slice(1)

export class Form extends React.Component {
  props: Props
  state: State

  constructor (props: Props) {
    super(props)

    this.state = {
      submitted: false
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit = () => {
    const {
      fields,
      onSubmit
    } = this.props

    const hasInvalidFields = fields.some(field =>
      field.validation &&
      !field.validation(
        this.state[field.name] || field.initial || '',
        this.state
      ).valid
    )

    if (hasInvalidFields) {
      this.setState({ submitted: true })
      return
    }

    onSubmit(this.state)
  }

  render = () => {
    const {
      fields,
      submitAction
    } = this.props

    return <form onSubmit={(e) => { this.handleSubmit(); e.preventDefault() }}>
      {fields.map((field, index) => {
        const {
          name,
          label,
          type,
          placeholder,
          initial
        } = field

        const validation = field.validation
          ? field.validation(this.state[name], this.state)
          : null

        return <div key={index} className='input-container'>
          <label htmlFor={name}>
            {label || capitalize(name)}
          </label>
          <input
            id={name}
            placeholder={placeholder || ''}
            type={type || 'text'}
            onChange={(event) => this.setState({
              [name]: event.target.value
            })}
            value={this.state[name] || initial || ''}
            className='form-control'
          />
          {
            this.state.submitted && validation && validation.errorMessage
            ? <span>{validation.errorMessage}</span>
            : null
          }
        </div>
      }
      )}
      <button
        type='submit'
        className='submit'
      >
        {submitAction || 'Submit'}
      </button>
    </form>
  }
}
