<template>
  <div class="container">
    <ul class="lists">
      <li
      class="list"
      v-for="item of letters"
      :key="item"
      @click="handleClick"
      @touchstart="start"
      @touchmove="move"
      @touchend="end"
      :ref="item"
      >{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'wordList',
  props: {
    cities: Object
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
      // 数据节流
    }
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleClick (e) {
      this.$emit('change', e.target.innerText)
    },
    start () {
      this.touchStatus = true
    },
    move (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 103
          const index = Math.floor((touchY - this.startY) / 20) - 1
          if (index >= 0 && this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    end () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
  .lists
    position fixed
    right 0rem
    top 2.5rem
    bottom 0px
    width .4rem
    font-size .25rem
    display flex
    flex-direction column
    justify-content center
    .list
      text-align center
      color $bgColor
      height .4rem
</style>
