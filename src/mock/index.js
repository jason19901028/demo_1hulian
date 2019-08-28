import Mock from 'mockjs'
import picturesApi from './pictures'

// 设置全局延时 没有延时的话有时候会检测不到数据变化
Mock.setup({
  timeout: '200-600'
})

Mock.mock('/pictures/list', 'get', picturesApi.getPictures)
Mock.mock('/pictures/classify', 'post', picturesApi.selectionSort)
Mock.mock('/pictures/sort', 'post', picturesApi.picturesSort)

export default Mock