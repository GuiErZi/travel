<template>
  <div>
    <home-header></home-header>
    <home-swiper :swiperLists="swiperLists"></home-swiper>
    <home-icons :iconLists="iconLists"></home-icons>
    <home-hot :hotCities="hotCities"></home-hot>
    <home-recommend :recommendLists="recommendLists"></home-recommend>
    <home-weekend :weekendLists="weekendLists"></home-weekend>

  </div>
</template>

<script>
import homeHeader from './components/Header'
import homeSwiper from './components/Swiper'
import homeIcons from './components/Icons'
import homeRecommend from './components/Recommend'
import homeWeekend from './components/Weekend'
import homeHot from './components/Hot'
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    homeHeader,
    homeSwiper,
    homeIcons,
    homeRecommend,
    homeWeekend,
    homeHot
  },
  data () {
    return {
      swiperLists: [],
      weekendLists: [],
      recommendLists: [],
      iconLists: [],
      hotCities: []
    }
  },
  mounted () {
    this.getHomeInfo()
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        this.swiperLists = res.data.swiperLists
        this.weekendLists = res.data.weekendLists
        this.recommendLists = res.data.recommendLists
        this.iconLists = res.data.iconLists
        this.hotCities = res.data.hotCities
      }
    }
  }
}
</script>

<style scoped>

</style>
