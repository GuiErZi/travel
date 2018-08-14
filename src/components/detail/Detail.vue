<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header   v-show="showAbs" :style="css"></detail-header>
    <detail-list :list="list"></detail-list>
   </div>
</template>

<script>
import detailBanner from './components/Banner'
import detailHeader from './components/Header'
import detailList from './components/List'
import axios from 'axios'
export default {
  name: 'Detail',
  components: {
    detailBanner,
    detailHeader,
    detailList
  },
  data () {
    return {
      showAbs: false,
      css: {
        opacity: 0
      },
      list: [],
      viewName: ''
    }
  },
  mounted () {
    this.getDetailInfo()
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity >= 1 ? 1 : opacity
        this.css = {
          opacity
        }
        this.showAbs = true
      } else {
        this.showAbs = false
      }
    },
    getDetailInfo () {
      axios.get('/api/ticket.json').then(this.getDetailInfoSucc)
    },
    getDetailInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        this.list = res.data.list
        this.viewName = res.data.viewName
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height 50rem
</style>
