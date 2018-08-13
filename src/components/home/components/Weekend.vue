<template>
  <div>
    <div class="recommend-title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of address" :key="item.id">
        <div class="img-wrapper">
         <img :src="item.imgUrl" alt="" class="item-img">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'homeWeekend',
  data () {
    return {
      address: [
        {
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/19/58f233e11df7ef.jpg_r_640x214_6b42c9fc.jpg',
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
    font-size .28rem
  .item
    display block
    .img-wrapper
      height 0
      padding-bottom 37.2%
      overflow hidden
      .item-img
        width: 100%
    .item-info
      min-width 0
      padding .2rem 0
      text-indent .2rem
      .item-title
        line-height .54rem
        font-size .28rem
        elli()
      .item-desc
        line-height .5rem
        color #616161
        font-size .24rem
</style>
