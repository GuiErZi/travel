<template>
  <div>
    <div class="container">
      <div class="headers">
          <span class="iconfont icon-back" @click="handle">&#xe604;</span>
        <h1 class="title">景区图片</h1>
      </div>
      <ul class="pictures">
        <li class="picture" v-for="item of pictures" :key="item.id"><img class="img" :src="item.imgUrl" alt=""></li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'commonGallary',
  data () {
    return {
      pictures: []
    }
  },
  mounted () {
    this.getDetailInfo()
  },
  methods: {
    handle () {
      this.$emit('close')
    },
    getDetailInfo () {
      axios.get('/api/ticket.json').then(this.getDetailInfoSucc)
    },
    getDetailInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        this.pictures = res.data.pictures
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
  .headers
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
    z-index 21
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
    z-index 20
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
