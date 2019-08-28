import axios from 'axios'
import {
  Message
} from 'element-ui'
import {
  getToken
} from './auth'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 60 * 1000, // 请求超时时间,
  headers: {
    'Content-Type': 'application/json'
  }
})

// request拦截器
service.interceptors.request.use(config => {
  if (getToken()) {
    config.headers['token'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
  }
  return config
}, error => {
  // Do something with request error
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.result !== 0) {
      Message({
        message: res.desc,
        type: 'error',
        duration: 5 * 1000
      })
      return Promise.reject(new Error('error'))
    } else {
      return response.data
    }
  },
  error => {
    let errorMsg = error.message

    const res = error.response
    if (res && res.data && res.data.desc) {
      if (res.data.result && res.data.result === 401) {
        location.reload()
      }
      errorMsg = res.data.desc
    } else if (errorMsg.indexOf('timeout') > -1) {
      errorMsg = '请求超时，请稍后重试'
    }
    Message({
      message: errorMsg,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
