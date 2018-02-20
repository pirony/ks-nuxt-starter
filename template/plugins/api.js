import * as axios from 'axios'
import {getUserTokenFromCookie, getUserTokenFromLocalStorage} from '@/utils/auth'

const getHeaders = (req) => {
  let headers = {}
  if (!req && typeof window !== 'undefined') {
    const tok = getUserTokenFromLocalStorage()
    headers.authorization = tok ? 'Bearer ' + tok : ''
  } else
  if (req) {
    const tok = getUserTokenFromCookie(req)
    headers.authorization = tok ? 'Bearer ' + tok : ''
  }
  return headers
}

export const WP = (req) => {
  const headers = getHeaders(req)
  return axios.create({
    baseURL: 'http://api.adage-gmap.test/wp-json/wp/v2/',
    headers
  })
}
export const JWT = (req) => {
  const headers = getHeaders(req)
  return axios.create({
    baseURL: 'http://api.adage-gmap.test/wp-json/jwt-auth/v1/'
    headers
  })
}
