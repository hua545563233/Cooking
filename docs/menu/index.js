const fs = require('fs');
const path = require('path')

const maps = {
  'dapanji': '大盘鸡',
  'suantangsurou': '酸汤酥肉',
  'yuxiangrousi': '鱼香肉丝',
  'ziranyangrou': '孜然羊肉',
  'yangcongfeiniu': '洋葱肥牛',
  'hongshaorou': '红烧肉',
  'suanlatudousi': '酸辣土豆丝',
  'suanrongyoumaicai': '蒜蓉油麦菜',
  'guobaroupian': '锅巴肉片',
  'jiangniurou': '酱牛肉',
}

const data = fs.readdirSync('./docs/menu')
const menus = data.filter(ele => ele.indexOf('.md') > -1).map(ele => {
  const key = ele.replace('.md', '')
  return [
    key,
    maps[key]
  ]
})

module.exports = {
  '/menu/': menus
}
