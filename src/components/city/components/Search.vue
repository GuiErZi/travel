<template>
  <div>
    <div class="search">
      <input v-model="keywords" class="search-input" type="text" name="input" placeholder="输入城市名或拼音">
    </div>
    <div class="search-content" ref="wrapper" v-show="keywords">
      <ul>
        <li v-for="item of list" class="name" :key="item.id">{{item.name}}</li>
        <li class="no-data" v-show="showTip">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'citySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keywords: '',
      list: [],
      timer: null
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  computed: {
    showTip () {
      return !this.list.length
    }
  },
  watch: {
    keywords () {
      if (!this.keywords) {
        this.list = []
        return
      }
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keywords) > -1 || value.name.indexOf(this.keywords) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
  .search
    font-size .24rem
    height .56rem
    padding .1rem
    background $bgColor
    .search-input
      width 100%
      height .56rem
      line-height .56rem
      text-align center
      border-radius .06rem
      color #666
      box-sizing border-box
      padding 0 .2rem
  .search-content
    position absolute
    top 2.24rem
    left 0px
    right 0px
    bottom 0px
    overflow hidden
    z-index 100
    font-size 0
    background #fff
    .name
      width 33.3%
      font-size .28rem
      height .9rem
      line-height .9rem
      display inline-block
      color $bgColor
      text-align center
      border-bottom .02rem solid #ddd
      border-right .02rem solid #ddd
      box-sizing border-box
    .no-data
      font-size .28rem
      padding .2rem
</style>
