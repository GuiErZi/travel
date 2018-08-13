<template>
  <ul class="lists">
    <li class="list" v-for="(item, key) of cities" :key="key">{{key}}</li>
  </ul>
</template>

<script>
export default {
  name: 'wordList',
  props: {
    cities: Object
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
