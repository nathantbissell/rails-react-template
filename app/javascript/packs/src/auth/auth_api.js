import apiUrl from '../api_config.js'
import axios from 'axios'
import Cookies from 'js-cookie';

export const signIn = (credentials) => {
  return axios.post(`${apiUrl}/sign_in`, credentials)
}

export const signUp = (credentials) => {
  return axios.post(`${apiUrl}/sign_up`,credentials)
}

export const signOut = () => {
  return axios.delete(
    `${apiUrl}/sign_out`,
    {headers: { "X-CSRF-Token": Cookies.get("CSRF-TOKEN") } })
}

export const changePassword = (passwords) => {
  return axios.patch(
    `${apiUrl}/change_pw`,
    passwords,
    { headers: { "X-CSRF-Token": Cookies.get("CSRF-TOKEN") } })
}

export const checkUser = () => {
  return axios.post(
    `${apiUrl}/check_user`,
    {  headers: { "X-CSRF-Token": Cookies.get("CSRF-TOKEN") } })
}
