module.exports = {
  title: "huashuocuicui",   // 设置网站标题
  description: 'huashuocuicui boke!',
  dest: 'example/public', // 设置输出目录
  head: [   // 额外的需要被注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/myico.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  // base: '/huashuocuicuiBlog/',
  base:'/blog/',    // 设置站点根路径  部署到github为“/”  部署到gitee为“/blog/”
  theme: 'reco',
  // theme: require.resolve('../../packages/vuepress-theme-reco'),
  themeConfig: {
    nav: [    //导航栏
      { text: '主页', link: '/', icon: 'reco-home' },
      { text: '时间轴', link: '/timeline/', icon: 'reco-date' },
      // { text: '其它', link: '/views/sidebar/' },
      { text: 'authine', link: '/views/sidebargroup/' },
      { text: '学习', link: '/views/xuexi/' }
    ],
    // 为以下路由添加左侧边栏
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
            //'',
            // 'API',
            'h3-BUG库',
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
            '云枢知识库',
            '云枢-BUG库'
          ]
        },
      ],
      '/views/xuexi/': [
        {
          title: 'markDown',
          collapsable: true,
          children: [
            'markdown手册',
            'markdown新玩',
          ]
        },
        {
          title: 'ES6',
          collapsable: true,
          children: [
            'es6/es6',
            'es6/es6简介.md',
            'es6/es6变量声明.md',
            'es6/es6字符串扩展.md',
          ]
        },
        {
          title: 'typeScript',
          collapsable: true,
          children: [
            'typeScript/ts简介.md',
            'typeScript/ts变量声明.md',
            'typeScript/ts基础语法.md',
            'typeScript/typescript.md',
          ]
        },
        {
          title: 'VUE',
          collapsable: true,
          children: [
            'vue',
          ]
        },
        {
          title: 'HTTP',
          collapsable: true,
          children: [
            'http/http缓存机制.md',
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
    logo: '/head.png',  //logo
    authorAvatar: '/head.png',
    // 搜索设置
    search: true, 
    searchMaxSuggestions: 10, //最大搜索条数
    // 自动形成侧边导航
    // sidebar: 'auto',
    sidebarDepth: 4,
    // 最后更新时间
    lastUpdated: 'Last Updated',
    // 作者
    author: 'huashuocuicui',
    // 备案号
    record: '个人使用',
    // 项目开始时间
    startYear: '2016',
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
    
  },
  //  评论
  plugins: {
    '@vssue/vuepress-plugin-vssue': {
      platform: 'github-v4', //v3的platform是github，v4的是github-v4
      locale: 'zh', //语言
      // 其他的 Vssue 配置
      owner: 'huashuocuicui', //github账户名
      repo: 'huashuocuicui.github.io', //github一个项目的名称
      clientId: 'f4e69ff4fe906bcc1ec1',//注册的Client ID
      clientSecret: '09210a19f8b2d8062750836b442d788bb7e833f6',//注册的Client Secret
      autoCreateIssue:true // 自动创建评论，默认是false，最好开启，这样首次进入页面的时候就不用去点击创建评论的按钮了。
    },
  },
}
