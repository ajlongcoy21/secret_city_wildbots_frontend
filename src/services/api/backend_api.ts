import axios from 'axios'

const backend_api = axios.create({
  baseURL: 'http://localhost:8000',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
})

backend_api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

backend_api.interceptors.response.use(
  (response) => {
    // Any 2xx response comes here
    return response.data
  },
  (error) => {
    // Any error response (4xx / 5xx) comes here
    return Promise.reject(error)
  }
)

export default backend_api
