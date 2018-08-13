<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list></city-list>
    <word-list></word-list>
  </div>
</template>

<script>
import cityHeader from './components/Header'
import citySearch from './components/Search'
import cityList from './components/List'
import wordList from './components/wordList'
export default {
  name: 'City',
  components: {
    cityHeader,
    citySearch,
    cityList,
    wordList
  }
}
</script>

<style lang="stylus" scoped>

</style>
