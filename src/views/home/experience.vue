<template>
  <div class="home-experience">
    <div class="vt-title">
      <i class="fa fa-plane"></i>
      <span>个人经历</span>
    </div>

    <div class="home-exp-list">
      <div class="home-exp-item" v-for="(o, i) in list" :key="i">
        <div class="item-company">
          <div class="name">{{ o.company }}</div>
          <div class="job">{{ o.job }}</div>
          <div class="time">{{ o.time }}</div>
        </div>
        <div class="item-line">
          <div class="point" :class="{'point-start': i === 0}">
            <div class="point-dot"></div>
          </div>
          <div class="line" v-show="(i+1) !== list.length"></div>
        </div>
        <div class="item-detail">{{ o.detail }}</div>
      </div>
    </div>

  </div>
</template>

<script>
import Data from './data/data.json'

export default {
  data () {
    return {
      list: Data.experience
    }
  },
  methods: {},
  created () {
  },
  mounted () {
  }
}
</script>

<style lang="scss">
.home-experience {
  .home-exp-list {
    .home-exp-item {
      display: flex;

      > div {
        flex-shrink: 0;
      }

      .item-company {
        width: 200px;

      }

      .item-line {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 34px;

        .point {
          width: 14px;
          height: 14px;
          border: 1px solid #ccc;
          border-radius: 50%;
          position: relative;

          .point-dot {
            width: 6px;
            height: 6px;
            background-color: #222;
            border-radius: 50%;
            position: absolute;
            top: 50%;
            left: 50%;
            margin: -3px 0 0 -3px;
          }
        }
        .point.point-start {
          width: 30px;
          height: 30px;
          border-color: $cl-main;
          .point-dot {
            background-color: $cl-main;
          }
        }

        .line {
          flex: 1;
          width: 1px;
          background-color: #999;

        }
      }

      .item-detail {
        flex: 1;
      }
    }
  }
}
</style>
