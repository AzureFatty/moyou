module.exports = {
  plugins: [
      ['@vuepress/pagination',true],
      ['@vuepress/medium-zoom',true],
      ['@vuepress/blog',true],
      ['@vuepress/back-to-top',true]
  ],
  //postsDir: 'blog',
  title: '360摩友会Blog',
  description: '360机车爱好者指定俱乐部',
  head:[
    ['meta', { name: 'keywords', content: '360摩托,360机车,360摩友,360MOTOR' }],
  ]
}