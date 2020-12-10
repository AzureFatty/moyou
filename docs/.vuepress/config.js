const sidebarDriverLicense = require('./conf/sidebar/driverLicense')
const sidebarGarage = require('./conf/sidebar/garage')
const sidebarEquipment = require('./conf/sidebar/equipment')
const sidebarRepair = require('./conf/sidebar/repair')
const sidebarSkills = require('./conf/sidebar/skills')

module.exports = {
  title: '奇友会',
  description: '电子城机车爱好者指定俱乐部',
  head: [
    ['meta', { name: 'keywords', content: '360摩托,360机车,360摩友,360MOTOR,奇安信,奇安信摩托,奇安信机车,奇安信摩友,奇虎,奇虎摩托,奇虎机车,奇虎摩友,骑友会,奇友会,摩友会,互联网机车,机车爱好者' }],
  ],
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  plugins: [
    'flowchart',
    '@vuepress/active-header-links',
    '@vuepress/pagination',
    '@vuepress/medium-zoom',
    '@vuepress/back-to-top',
    ['@vuepress/last-updated', {
      transformer: (timestamp, lang) => {
        // Don't forget to install moment yourself
        const moment = require('moment')
        moment.locale('zh-CN')
        return moment(timestamp).format('YYYY-MM-DD HH:mm')
      }
    }],
    'vuepress-plugin-baidu-autopush',
    ['sitemap', {
      hostname: 'https://moyou.club'
    }],
  ],
  themeConfig: {
    repo: 'EngrZhou/moyou',
    editLinks: true,
    docsRepo: 'EngrZhou/moyou',
    docsDir: 'docs',
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
    nav: [
      { text: '驾考车检', link: '/driver-license/' }, // 内部链接 以docs为根目录
      { text: '选车登记', link: '/garage/' }, // 内部链接
      { text: '骑行装备', link: '/equipment/' }, // 内部链接
      { text: '维修保养', link: '/repair/' }, // 内部链接
      { text: '骑技心得', link: '/skills/' }, // 内部链接
      // 下拉列表
      {
        text: '关于',
        items: [
          { text: '贡献者', link: '/about/contributors' },
          { text: '加入我们', link: '/about/joinus' },
          { text: '联系我们', link: '/about/contactus' },
          { text: '赞助公示', link: '/about/materials-sponsor' }
        ]
      }
    ],
    //sidebarDepth: 2,
    //displayAllHeaders: true,//显示所有页面的标题链接
    //为方便维护侧边栏变量引用转移到./config/sidebar/下
    sidebar: {
      '/driver-license/': sidebarDriverLicense,
      '/garage/': sidebarGarage,
      '/equipment/': sidebarEquipment,
      '/repair/': sidebarRepair,
      '/skills/': sidebarSkills,
    },
    algolia: {
      appId: 'WPG0KS5PB1',
      apiKey: '8cbe5822e8b9963024b7d5662d44ef35',
      indexName: 'moyou'
    }
  }
}