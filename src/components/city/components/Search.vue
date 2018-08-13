<template>
  <div class="search">
    <input class="search-input" type="text" name="input" placeholder="输入城市名或拼音">
  </div>
</template>

<script>
export default {
  name: 'citySearch'
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
</style>
