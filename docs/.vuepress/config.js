module.exports = {
  title: "huashuocuicui",
  description: 'huashuocuicui boke!',
  dest: 'example/public',
  head: [
    ['link', { rel: 'icon', href: '/myico.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  base: '/huashuocuicuiBlog/',
  theme: 'reco',
  // theme: require.resolve('../../packages/vuepress-theme-reco'),
  themeConfig: {
    nav: [
      { text: '主页', link: '/', icon: 'reco-home' },
      { text: '时间轴', link: '/timeline/', icon: 'reco-date' },
      // { text: '其它', link: '/views/sidebar/' },
      { text: 'authine', link: '/views/sidebargroup/' }
    ],
    sidebar: {
      '/views/sidebar/': [
        '',
        'H3Bpm',
        'bar2'
      ],
      '/views/sidebargroup/': [
        {
          title: 'H3·BPM',
          collapsable: true,
          children: [
            '',
            '技术栈',
            'API',
            'web',
            'bar1'
          ]
        },
        {
          title: '奥哲·云枢',
          collapsable: true,
          children: [
            // 'bar2',
            '云枢概括',
            '云枢二开',
            '云枢配置',
            '云枢知识库'
          ]
        },
      ]
    },
    type: 'blog',
    // 博客设置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: '类别' // 默认 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: '标签' // 默认 “标签”
      }
    },
    logo: '/head.png',
    authorAvatar: '/head.png',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    // sidebar: 'auto',
    sidebarDepth: 4,
    // 最后更新时间
    lastUpdated: 'Last Updated',
    // 作者
    author: 'huashuocuicui',
    // 备案号
    record: 'xxxx',
    // 项目开始时间
    startYear: '2019',
    /**
     * 密钥 (if your blog is private)
     */
    friendLink: [
      {
        title: '话说崔崔',
        desc: 'Enjoy when you can, and endure when you must.',
        email: '1156743527@qq.com',
        link: 'https://www.recoluan.com'
      },
      {
        title: 'huashuocuicui',
        desc: 'A simple and beautiful vuepress Blog & Doc theme.',
        avatar: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        link: 'https://vuepress-theme-reco.recoluan.com'
      },
    ],
    /**
     * support for
     * '' | 'default'
     * 'coy'
     * 'dark'
     * 'funky'
     * 'okaidia'
     * 'solarizedlight'
     * 'tomorrow'
     * 'twilight'
     */
    
  }
}
