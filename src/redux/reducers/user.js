/* eslint-disable no-case-declarations */
import { userTypes } from '../types'

const initState = {
  token: '',
  infoUser: {},
  message: '',
}

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case userTypes.REGISTER_USER:
      return { ...state }
    case userTypes.LOGIN_USER_SUCCESS:
      const { token } = action.payload.data
      return {
        ...state, token,
      }
    case userTypes.LOGIN_USER_FAIL:
      const { error } = action.payload.data
      return {
        ...state, message: error,
      }
    default:
      return state
  }
}

export default userReducer
