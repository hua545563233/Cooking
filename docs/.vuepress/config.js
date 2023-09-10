module.exports = {
  title: '做道菜',
  description: 'cook a dish',
  base: '/Cooking/',
  configureWebpack: {
    resolve: {
      alias: {
        '@images': './public/images'
      }
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '菜谱', link: '/menu/dapanji', activeMatch: '^/menu/' }
    ],
    sidebar:{
      '/menu/': [
        ['dapanji', '大盘鸡'],
        ['suantangsurou', '酸汤酥肉'],
        ['yuxiangrousi', '鱼香肉丝'],
        ['ziranyangrou', '孜然羊肉'],
        ['yangcongfeiniu', '洋葱肥牛'],
        ['hongshaorou', '红烧肉'],
        ['suanlatudousi', '酸辣土豆丝'],
        ['suanrongyoumaicai', '蒜蓉油麦菜'],
      ]
    }
  }
}