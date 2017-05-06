// @flow
import React from 'react'

type Props = {
  value: string,
  onChange: (value: string) => void
}

export const SearchBar = ({ value, onChange }: Props) =>
  <div className='search-bar'>
    <div className='search'>
      <input
        className='form-control'
        placeholder='Search'
        type='text'
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  </div>
