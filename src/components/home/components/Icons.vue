<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-imgs">
            <img class="icon-img" :src="item.imgUrl">
          </div>
          <p class="icon-title">{{item.title}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'homeIcons',
  props: {
    iconLists: Array
  },
  data () {
    return {
      swiperOption: {
        autoplay: false
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconLists.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
  .icons >>> .swiper-container
    height: 0
    padding-bottom: 40%
  .icon
    width: 25%
    float: left
    padding-bottom: 20%
    height: 0
    overflow: hidden
    position: relative
    .icon-imgs
      position: absolute
      left: 0
      top: .1rem
      right:0
      bottom: .4rem
      text-align: center
      box-sizing: border-box
      padding-bottom: .1rem
      .icon-img
        height: 100%
    .icon-title
      font-size: 13px
      position: absolute
      left: 0
      right: 0
      bottom: 0
      text-align: center
      line-height: .44rem
      height: .44rem
      color: $darkColor
      elli()
</style>
