import apiUrl from '../api_config.js'
import axios from 'axios'


export const signIn = (credentials) => {
  return axios.post(`${apiUrl}/sign_in`, credentials)
}

export const signUp = (credentials) => {
  return axios.post(`${apiUrl}/sign_up`, credentials)
}
