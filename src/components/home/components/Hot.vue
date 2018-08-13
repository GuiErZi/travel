<template>
  <div>
    <div class="recommend-title">本周热门榜单</div>
    <ul class="scroll">
      <li class="item border-bottom" v-for="item of address" :key="item.id">
          <img :src="item.imgUrl" alt="" class="item-img">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc"><span class="iconfont desc">&#xe648;</span><span class="desc">{{item.much}}</span>起</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'homeHot',
  data () {
    return {
      address: [
        {
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1505/18/18ffcca94b1b7ca2.water.jpg_200x200_9b0d2dc4.jpg',
          title: '长恨歌',
          desc: '描述',
          much: '20'
        },
        {
          id: '0002',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1411/1a/5582f9f24bc50b475a8cbda4c5ac8d24.water.jpg_200x200_a0d48950.jpg',
          title: '长恨歌',
          desc: '描述',
          much: '20'
        },
        {
          id: '0003',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1602/de/de8400021b664c5390.img.jpg_200x200_46b16057.jpg',
          title: '长恨歌',
          desc: '描述',
          much: '20'
        },
        {
          id: '0004',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1505/18/18ffcca94b1b7ca2.water.jpg_200x200_9b0d2dc4.jpg',
          title: '长恨歌',
          desc: '描述',
          much: '20'
        },
        {
          id: '0005',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1505/18/18ffcca94b1b7ca2.water.jpg_200x200_9b0d2dc4.jpg',
          title: '长恨歌',
          desc: '描述',
          much: '20'
        },
        {
          id: '0006',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1505/18/18ffcca94b1b7ca2.water.jpg_200x200_9b0d2dc4.jpg',
          title: '长恨歌',
          desc: '描述',
          much: '20'
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
  .scroll
    overflow-x scroll
    white-space nowrap
    margin .2rem
    .item
      width 2rem
      height 3.2rem
      margin-right .2rem
      display inline-block
      .item-img
        width 100%
      .item-info
        margin-top .05rem
        .item-title
          font-size .24rem
          text-align center
          color rgb(33,33,33)
        .item-desc
          font-size .28rem
          text-align center
          margin-top .15rem
          .desc
            color: #ff8300;
</style>
