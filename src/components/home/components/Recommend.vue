<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of address" :key="item.id">
          <img :src="item.imgUrl" alt="" class="item-img">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'homeRecommend',
  data () {
    return {
      address: [
        {
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1505/18/18ffcca94b1b7ca2.water.jpg_200x200_9b0d2dc4.jpg',
          title: '长恨歌',
          desc: '描述'
        },
        {
          id: '0002',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1411/1a/5582f9f24bc50b475a8cbda4c5ac8d24.water.jpg_200x200_a0d48950.jpg',
          title: '长恨歌',
          desc: '描述'
        },
        {
          id: '0003',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1602/de/de8400021b664c5390.img.jpg_200x200_46b16057.jpg',
          title: '长恨歌',
          desc: '描述'
        },
        {
          id: '0004',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1505/18/18ffcca94b1b7ca2.water.jpg_200x200_9b0d2dc4.jpg',
          title: '长恨歌',
          desc: '描述'
        },
        {
          id: '0005',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1505/18/18ffcca94b1b7ca2.water.jpg_200x200_9b0d2dc4.jpg',
          title: '长恨歌',
          desc: '描述'
        },
        {
          id: '0006',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1505/18/18ffcca94b1b7ca2.water.jpg_200x200_9b0d2dc4.jpg',
          title: '长恨歌',
          desc: '描述'
        },
        {
          id: '0007',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1505/18/18ffcca94b1b7ca2.water.jpg_200x200_9b0d2dc4.jpg',
          title: '长恨歌',
          desc: '描述'
        },
        {
          id: '0008',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1505/18/18ffcca94b1b7ca2.water.jpg_200x200_9b0d2dc4.jpg',
          title: '长恨歌',
          desc: '描述'
        },
        {
          id: '0009',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1505/18/18ffcca94b1b7ca2.water.jpg_200x200_9b0d2dc4.jpg',
          title: '长恨歌',
          desc: '描述'
        },
        {
          id: '00010',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1505/18/18ffcca94b1b7ca2.water.jpg_200x200_9b0d2dc4.jpg',
          title: '长恨歌',
          desc: '描述'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
  .recommend-title
    line-height: .8rem
    background: #eee
    text-indent .2rem
    margin-top .2rem
    font-size 13px
  .item
    display flex
    height 1.9rem
    overflow hidden
    .item-img
      width: 1.7rem
      height 1.7rem
      padding .1rem
    .item-info
      flex 1
      font-size 14px
      min-width 0
      padding .1rem
      .item-title
        line-height .54rem
        font-size .32rem
        font-size 18px
        elli()
      .item-desc
        line-height .5rem
        color #aaa
      .item-button
        background #ff9300
        padding 0 .2rem
        margin-top .1rem
        line-height .4rem
        color #fff
        border-radius .06rem
        border: none
</style>
