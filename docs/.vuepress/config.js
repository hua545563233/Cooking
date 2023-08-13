module.exports = {
  title: '做道菜',
  description: 'Just playing around',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '菜谱', link: '/menu/xxxx', activeMatch: '^/menu/' },
      { text: '菜谱2', link: '/menus/dapanji', activeMatch: '^/menus/' },
      // { text: '随笔', link: '/article/', activeMatch: '^/article/'}
    ],

    // sidebar: {
    //   '/menu/': [
    //     {
    //       items: [
    //         { text: 'html', link: '/menu/xxxx' },
    //         { text: 'css', link: '/frontend/css' },
    //         { text: 'js', link: '/frontend/js' }
    //       ]
    //     }
    //   ]
    // },
    sidebar:{
      '/menus/': [
        ['dapanji', '大盘鸡'],
        ['suantangsurou', '酸汤酥肉'],
        ['yuxiangrousi', '鱼香肉丝'],
        ['ziranyangrou', '孜然羊肉'],
        ['yangcongfeiniu', '洋葱肥牛'],
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/hua545563233' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present liu zhihua'
    }
  }
}