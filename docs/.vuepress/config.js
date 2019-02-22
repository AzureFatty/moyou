module.exports = {
  title: '360摩友会',
  description: '360机车爱好者指定俱乐部',
  head:[
    ['meta', { name: 'keywords', content: '360摩托,360机车,360摩友,360MOTOR' }],
  ],
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  plugins: [
        ['@vuepress/active-header-links',true],
        ['@vuepress/pagination',true],
        ['@vuepress/medium-zoom',true],
        ['@vuepress/back-to-top',true],
        ['@vuepress/last-updated',{
          transformer: (timestamp, lang) => {
            // Don't forget to install moment yourself
            const moment = require('moment')
            moment.locale('zh-CN')
            return moment(timestamp).format('YYYY-MM-DD HH:mm')
          }
        }]
    ],
  themeConfig: {
    repo: '360moyou/moyou',
    editLinks: true,
    docsRepo: '360moyou/moyou',
    docsDir: 'docs',
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
    nav:[
      { text: '驾考心经', link: '/driver-license/' }, // 内部链接 以docs为根目录
      { text: '机车精选', link: '/garage/' }, // 内部链接
      { text: '骑行装备', link: '/equipment/' }, // 内部链接
      { text: '维修保养', link: '/repair/' }, // 内部链接
      { text: '骑技心得', link: '/skill/' }, // 内部链接
      // 下拉列表
      {
        text: '关于',
        items: [
          { text: '加入我们', link: '/joinus/' },
          { text: '联系我们', link: '/contactus/' }
        ]
      }        
    ],
    //sidebarDepth: 2,
    //displayAllHeaders: true,//显示所有页面的标题链接
    sidebar: {
      '/driver-license/': [
        {
          title: '经验',
          collapsable: false,
          children: [
            ''
          ]
        },
        {
          title: '驾校选择',
          collapsable: false,
          children: [
            'choice',
            'dfss',
            'gjjx',
            'jdf',
            'hdjx'
          ]
        },
        
      ],
      '/garage/': [
        ['',"机车精选"],
        {
           title: '车辆牌照',
           collapsable: false,
           children: [
             'license-plate/a-or-b',
             'license-plate/company-or-personal',
             'license-plate/restrict-policy'
           ]
        },
        {
           title: '车辆推荐',
           collapsable: false,
           children: [
             'recommend/junior-motorcycle',
             'recommend/intermediate-motorcycle',
             'recommend/advanced-motorcycle'
           ]
        },
      ],
      '/equipment/': [
        '',
        {
          title: '运动相机/记录仪',
          collapsable: false,
          children: [
            'recorder/sjcam',
            'recorder/yi',
            'recorder/sony',
            'recorder/gopro',
          ]
        },
      ],
      '/repair/': [
        {
          title: '维修网点',
          collapsable: false,
          children: [
            ['location/yiming',"口鸟机车「荐」"],
            'location/haojue',
            'location/xiaosheng',
            'location/fenghuolun',
            'location/bgfanfan',
          ]
        },
        {
          title: '机油',
          collapsable: false,
          children: [
            'motor_oil/'
          ]
        },
        {
          title: '车险',
          collapsable: false,
          children: [
            'insurance/'
          ]
        },
      ],
      '/skill/': [
        ['',"骑技心得"],
        ['traffic_violation/',"违章易发区"],
      ]
    }
  }
}