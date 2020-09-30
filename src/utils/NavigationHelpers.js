import { StackActions } from '@react-navigation/native'
import * as React from 'react'

export const navigationRef = React.createRef()

export function navigateToScreen(name, params) {
  return navigationRef.current?.navigate(name, params)
}

export function navigateBack() {
  return navigationRef.current?.goBack()
}
export function navigateReplace(name) {
  return navigationRef.current?.dispatch(StackActions.replace(name))
}
