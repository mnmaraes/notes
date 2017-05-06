// @flow
import React from 'react'

type Props = {
  error: string
}

export const ErrorBox = ({ error }: Props) =>
  <div>
    <span>{error}</span>
  </div>
