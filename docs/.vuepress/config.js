module.exports = {
  title: '奇友会',
  description: '电子城机车爱好者指定俱乐部',
  head:[
    ['meta', { name: 'keywords', content: '360摩托,360机车,360摩友,360MOTOR,奇安信,奇安信摩托,奇安信机车,奇安信摩友,奇虎,奇虎摩托,奇虎机车,奇虎摩友,骑友会,奇友会' }],
  ],
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  plugins: [
        'flowchart',
        '@vuepress/active-header-links',
        '@vuepress/pagination',
        '@vuepress/medium-zoom',
        '@vuepress/back-to-top',
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
    repo: 'EngrZhou/moyou',
    editLinks: true,
    docsRepo: 'EngrZhou/moyou',
    docsDir: 'docs',
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
    nav:[
      { text: '驾考心经', link: '/driver-license/' }, // 内部链接 以docs为根目录
      { text: '选车登记', link: '/garage/' }, // 内部链接
      { text: '骑行装备', link: '/equipment/' }, // 内部链接
      { text: '维修保养', link: '/repair/' }, // 内部链接
      { text: '骑技心得', link: '/skills/' }, // 内部链接
      // 下拉列表
      {
        text: '关于',
        items: [
          { text: '加入我们', link: '/about/joinus' },
          { text: '联系我们', link: '/about/contactus' },
          { text: '赞助公示', link: '/about/materials-sponsor' }
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
            '',
            'tmpid',
            'renew'
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
        '',
        {
           title: '车辆推荐',
           collapsable: false,
           children: [
             'recommend/scooter',
             'recommend/junior-motorcycle',
             'recommend/intermediate-motorcycle',
             'recommend/advanced-motorcycle',
           ]
        },
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
           title: '车辆登记流程',
           collapsable: true,
           children: [
             ['motor-register/',"概述"],
             ['motor-register/insurance',"1.上交强险"],
             ['motor-register/acquisition-tax',"2.车辆购置税缴纳"],
             ['motor-register/temp-license',"3.办理临牌"],
             ['motor-register/check-motor',"4.验车上牌"],
           ]
        },
        {
          title: '二手车交易',
          children: [
            ['trade/trade-knowledge',"心得"],
            ['trade/motor-owner-transfer',"过户流程"]
          ]
        },
        {
          title: '车险',
          collapsable: false,
          children: [
            'insurance/tci',
            'insurance/vci',
            'insurance/ti',
            'insurance/vdi',
          ]
        },
      ],
      '/equipment/': [
        '',
        {
          title: '装备实体店',
          collapsable: true,
          children: [
            'shop/jichewaigua',
            'shop/dainese',
          ]
        },
        {
          title: '装备选购经验',
          collapsable: true,
          children: [
            'experience/real-CE-logo',
          ]
        },
        {
          title: '运动相机/记录仪',
          collapsable: false,
          children: [
            'recorder/',
            'recorder/perspective',
            'recorder/sjcam',
            'recorder/yi',
            'recorder/sony',
            'recorder/gopro',
            'recorder/dji',
          ]
        },
        {
          title: '扩展配件',
          collapsable: false,
          children:[
            'extensions/mobile-phone-holder',
            'extensions/lock',
            'extensions/charging',
            'extensions/gopro-accessories'
          ]
        }
      ],
      '/repair/': [
        {
          title: '维修网点',
          collapsable: false,
          children: [
            ['location/yiming',"口鸟机车「荐」"],
            'location/haojue',
            'location/xiaosheng',
            'location/dadihengtong-flagship-store',
            'location/fenghuolun',
            'location/bgfanfan',
          ]
        },
        {
          title: '洗车',
          collapsable: false,
          children: [
            ['washing/shunchi',"顺驰汽车"],
            'washing/ttclub',
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
          title: '刹车',
          collapsable: false,
          children: [
            'brake/honda190-brake-system-maintenance'
          ]
        },
      ],
      '/skills/': [
        ['',"骑技心得"],
        {
          title: '新手技巧',
          collapsable: false,
          children: [
            'noobs/ten-motorcycle-riding-tips-tricks-and-techniques'
          ]
        },
        ['traffic_violation/',"违章易发区"],
      ]
    }
  }
}