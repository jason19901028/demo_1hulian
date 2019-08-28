import request from '../utils/request'
export function getPictures () {
  return request({
    url: `/pictures/list`,
    method: 'get'
  })
}
export function selectClassify (params) {
  return request({
    url: `/pictures/classify`,
    method: 'post',
    data: params
  })
}

export function picturesSort (params) {
  return request({
    url: `/pictures/sort`,
    method: 'post',
    data: params
  })
}