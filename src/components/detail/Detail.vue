<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header   v-show="showAbs" :style="css"></detail-header>
    <div class="content"></div>
  </div>
</template>

<script>
import detailBanner from './components/Banner'
import detailHeader from './components/Header'
export default {
  name: 'Detail',
  components: {
    detailBanner,
    detailHeader
  },
  data () {
    return {
      showAbs: false,
      css: {
        opacity: 0
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
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
    }
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height 50rem
</style>
