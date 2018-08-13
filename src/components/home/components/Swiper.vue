<template>
  <div class="wrapper">
  <swiper :options="swiperOption" ref="mySwiper" v-if="showSwiper">
    <!-- slides -->
    <swiper-slide v-for="swiperList of swiperLists" v-bind:key="swiperList.id">
         <img class="swiper-img" :src="swiperList.imgUrl">
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
export default {
  name: 'homeSwiper',
  data: function () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  },
  props: {
    swiperLists: Array
  },
  computed: {
    showSwiper () {
      return this.swiperLists.length
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff
  .wrapper
    width: 100%
    height: 0
    overflow: hidden
    padding-bottom: 23.4%
    background: #eee
    .swiper-img
      width: 100%
</style>
