<template>
  <ul class="lists">
    <li class="list" v-for="(item, index) of items" :key="index">{{item}}</li>
  </ul>
</template>

<script>
export default {
  name: 'wordList',
  data () {
    return {
      items: [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'G', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
      ]
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
