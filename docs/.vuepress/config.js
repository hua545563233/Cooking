const menuBar = require('../menu/index.js')

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
      ...menuBar
    }
  }
}