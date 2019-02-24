import apiUrl from '../api_config.js'
import axios from 'axios'


export const signIn = (credentials) => {
  return axios.post(`${apiUrl}/sign_in`, credentials)
}

export const signUp = (credentials) => {
  return axios.post(`${apiUrl}/sign_up`, credentials)
}

export const signOut = () => {
  return axios.delete(`${apiUrl}/sign_out`)
}
