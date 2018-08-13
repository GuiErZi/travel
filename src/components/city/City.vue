<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list></city-list>
  </div>
</template>

<script>
import cityHeader from './components/Header'
import citySearch from './components/Search'
import cityList from './components/List'
export default {
  name: 'City',
  components: {
    cityHeader,
    citySearch,
    cityList
  }
}
</script>

<style lang="stylus" scoped>

</style>
