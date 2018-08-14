<template>
  <div>
    <div class="container">
      <div class="header">
          <span class="iconfont icon-back" @click="handle">&#xe604;</span>
        <h1 class="title">景区图片</h1>
      </div>
      <ul class="pictures">
        <li class="picture" v-for="picture of pictures" :key="picture.id"><img class="img" :src="picture.imgUrl" alt=""></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'commonGallary',
  data () {
    return {
      pictures: [
        {
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1711/81/81ed632012f27eeaa3.img.jpg_350x240_6db86357.jpg'
        },
        {
          id: '0002',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1711/1e/1e5eaf5ac11a1dea3.img.jpg_350x240_1654220c.jpg'
        },
        {
          id: '0003',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1711/81/81ed632012f27eeaa3.img.jpg_350x240_6db86357.jpg'
        },
        {
          id: '0004',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1711/81/81ed632012f27eeaa3.img.jpg_350x240_6db86357.jpg'
        },
        {
          id: '0005',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1711/81/81ed632012f27eeaa3.img.jpg_350x240_6db86357.jpg'
        },
        {
          id: '0006',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1711/81/81ed632012f27eeaa3.img.jpg_350x240_6db86357.jpg'
        },
        {
          id: '0007',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1711/81/81ed632012f27eeaa3.img.jpg_350x240_6db86357.jpg'
        },
        {
          id: '0008',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1711/81/81ed632012f27eeaa3.img.jpg_350x240_6db86357.jpg'
        },
        {
          id: '0009',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1711/81/81ed632012f27eeaa3.img.jpg_350x240_6db86357.jpg'
        },
        {
          id: '00016',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1711/81/81ed632012f27eeaa3.img.jpg_350x240_6db86357.jpg'
        },
        {
          id: '00010',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1711/81/81ed632012f27eeaa3.img.jpg_350x240_6db86357.jpg'
        },
        {
          id: '00011',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1711/81/81ed632012f27eeaa3.img.jpg_350x240_6db86357.jpg'
        },
        {
          id: '00012',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1711/81/81ed632012f27eeaa3.img.jpg_350x240_6db86357.jpg'
        },
        {
          id: '00013',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1711/81/81ed632012f27eeaa3.img.jpg_350x240_6db86357.jpg'
        },
        {
          id: '00015',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1711/81/81ed632012f27eeaa3.img.jpg_350x240_6db86357.jpg'
        },
        {
          id: '00014',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1711/81/81ed632012f27eeaa3.img.jpg_350x240_6db86357.jpg'
        }
      ]
    }
  },
  methods: {
    handle () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
  .header
    height .88rem
    line-height .88rem
    overflow hidden
    color #fff
    background $bgColor
    text-align center
    font-size .32rem
    position fixed
    left 0px
    top 0px
    width 100%
    z-index 1
    .icon-back
      position absolute
      left .2rem
      font-size .36rem
      color #fff
  .pictures
    position absolute
    left 0px
    top .88rem
    background #f5f5f5
    width 100%
    padding .15rem .14rem
    overflow hidden
    box-sizing border-box
    .picture
      float left
      width 50%
      padding 0 .04rem
      margin-bottom .1rem
      box-sizing border-box
      font-size 0
      .img
        width 100%
</style>
