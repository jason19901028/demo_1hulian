import request from '../untils/request'
export function getPictures () {
  return request({
    url: `/pictures/list`,
    method: 'get'
  })
}