import { showMessage } from 'react-native-flash-message'
import { MessageStyle } from '../../assets/styles'

export const showMes = (message, type = 'error') => {
  if (type === 'success') {
    return showMessage({
      message,
      ...MessageStyle.success,
    })
  }

  return showMessage({
    message,
    ...MessageStyle.error,
  })
}
