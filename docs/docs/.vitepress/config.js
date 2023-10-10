module.exports = {
  title: 'Hello VitePress21',
  description: 'Just playing around.',
  themeConfig:{
    siteTitle: "Kitty",
    nav: [
      { text: '组件', link: 'Guide', activeMatch: '/guide/' }
    ],
    sidebar: [
      {
        text: "组件库源码实现",
        items: [
          {
            text: "组件库环境搭建",
            link: "/articles/组件库环境搭建",
          },
          { text: "gulp的使用", link: "/articles/gulp的使用" },
        ],
      },
      {
        text: "vue教程",
        items: [
          {
            text: "pina和vuex",
            link: "/articles/pina和vuex",
          }
        ]
      }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present The Muse Catcher',
    }
  }
}