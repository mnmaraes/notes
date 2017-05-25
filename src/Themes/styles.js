// @flow
import {black, white} from './colors'

export const base = {
  fill: {
    height: '100vh',
    width: '100vw'
  },
  centersChildren: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  light: {
    backgroundColor: white,
    color: black
  },
  dark: {
    backgroundColor: black,
    color: white
  }
}
