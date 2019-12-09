import axios from 'axios'

export const http = axios.create({
  baseURL: 'https://stormy-cove-14668.herokuapp.com/api/v1/',
  headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    }
})
