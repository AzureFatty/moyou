module.exports = {
  plugins: [
      ['@vuepress/pagination',true],
      ['@vuepress/medium-zoom',true],
      ['@vuepress/blog',true],
      ['@vuepress/back-to-top',true]
  ],
  //postsDir: 'blog',
  title: '奇友会Blog',
  description: '电子城机车爱好者指定俱乐部',
  head:[
    ['meta', { name: 'keywords', content: '360摩托,360机车,360摩友,360MOTOR,奇安信,奇安信摩托,奇安信机车,奇安信摩友,奇虎,奇虎摩托,奇虎机车,奇虎摩友,骑友会,奇友会' }],
  ]
}