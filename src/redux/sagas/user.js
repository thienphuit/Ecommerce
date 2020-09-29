import {
  call, put, takeLatest,
} from 'redux-saga/effects'
import axios from 'axios'
import { API_URL } from '../../configs'
import { userTypes } from '../types'

function* loginUser(action) {
  try {
    const response = yield call(() => axios.post(`${API_URL}/user/login`, {
      email: action.payload.data.email,
      password: action.payload.data.password,
    }))
    yield put({
      type: userTypes.LOGIN_USER_SUCCESS,
      payload: { data: response.data },
    })
  } catch (error) {
    yield put({
      type: userTypes.LOGIN_USER_FAIL,
      payload: { error: error.message },
    })
  }
}
function* registerUser(action) {
  const { callback } = action?.payload
  console.tron.log({ action })
  try {
    const response = yield call(() => axios.post(`${API_URL}/user/register`, {
      fullname: action?.payload?.data?.fullname,
      email: action?.payload?.data?.email,
      password: action?.payload?.data?.password,
    }))
    // yield put({
    //   type: userTypes.REGISTER_USER_SUCCESS,
    //   payload: { data: response.data },
    // })
    callback(response)
  } catch (error) {
    // yield put({
    //   type: userTypes.REGISTER_USER_FAIL,
    //   payload: { error: error.message },
    // })
    callback({
      success: false,
      message: error?.message,
    })
  }
}

export default function* userSaga() {
  yield takeLatest(userTypes.LOGIN_USER, loginUser)
  yield takeLatest(userTypes.REGISTER_USER, registerUser)
}
