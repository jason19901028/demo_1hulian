import request from '../untils/request'
export function getPictures () {
  return request({
    url: `/pictures/list`,
    method: 'get'
  })
}
export function selectionSort (params) {
  return request({
    url: `/pictures/classify`,
    method: 'post',
    data: params
  })
}