import Mock from 'mockjs'

const list = []
const count = 100
let classifyFun = (number) => {
  if ((number.toString()).indexOf(1) >= 0) {
    return '分类1'
  } else if ((number.toString()).indexOf(2) >= 0) {
    return '分类2'
  } else if ((number.toString()).indexOf(3) >= 0) {
    return '分类3'
  } else if ((number.toString()).indexOf(4) >= 0) {
    return '分类4'
  } else if ((number.toString()).indexOf(5) >= 0) {
    return '分类5'
  } else {
    return '其他分类'
  }
}
for (let i = 0; i < count; i++) {
  list.push(
    Mock.mock({
      id: i + 1,
      name: Mock.Random.ctitle(2, 10),
      classifyName: classifyFun(i + 1),
      createTime: Mock.Random.date('yyyy-MM-dd HH:mm:ss'),
      url: Mock.Random.image('400x300', `${Mock.Random.color()}`)
    })
  )
}

export default {
  getPictures: () => {
    return {
      result: 0,
      data: list
    }
  }
}