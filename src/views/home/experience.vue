<template>
  <div class="home-experience">
    <div class="vt-title">
      <i class="fa fa-plane"></i>
      <span>个人经历</span>
    </div>

    <div class="home-exp-list" v-if="!isMobile">
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
        <div class="item-detail">
          <div class="item-detail-1" v-html="o.detail"></div>
          <div class="item-detail-2" >
            <div class="vt-row" v-if="o.role">
              <div class="label">角色：</div>
              <div class="value" v-html="o.role"></div>
            </div>
            <div class="vt-row" v-if="o.tech">
              <div class="label">技术特点：</div>
              <div class="value"><code>{{ o.tech }}</code></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="home-exp-list home-exp-list-mobile" v-if="isMobile">
      <div class="home-exp-item" v-for="(o, i) in list" :key="i">
        <div class="item-line">
          <div class="point" :class="{'point-start': i === 0}">
            <div class="point-dot"></div>
          </div>
          <div class="line" v-show="(i+1) !== list.length"></div>
        </div>

        <div class="item-right">
          <div class="item-company">
            <div class="name">{{ o.company }}</div>
            <div class="vt-row">
              <div class="job">{{ o.job }}</div>
              <div class="time">{{ o.time }}</div>
            </div>
          </div>
          <div class="item-detail">
            <div class="item-detail-1" v-html="o.detail"></div>
            <div class="item-detail-2" >
              <div class="vt-row" v-if="o.role">
                <div class="label">角色：</div>
                <div class="value" v-html="o.role"></div>
              </div>
              <div class="vt-row" v-if="o.tech">
                <div class="label">技术特点：</div>
                <div class="value"><code>{{ o.tech }}</code></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  data () {
    return {
      list: []
    }
  },
  methods: {},
  created () {
  },
  mounted () {
    this.list = this.vitaData.experience.map(item => {
      return item
    })
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
        .name {

        }
        .job {
          font-size: 14px;
        }
        .time {
          font-size: 14px;
          color: $cl-fz-grey;
        }

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
        text-align: left;
        padding: 0 0 0 14px;
        margin-bottom: 30px;
        flex: 1;
        > div {
          margin-bottom: 8px;
        }
        .item-detail-2 {
          .label {
            font-weight: bold;
          }
        }
      }
    }
  }

  .home-exp-list-mobile {
    .home-exp-item {
      display: flex;
      .item-right {
        display: block;
        flex: 1;
        padding: 0 20px 0 10px;
        .job {
          margin-right: 20px;
        }
        .item-company {
          text-align: left;
          width: 100%;
        }
        .item-detail {
          padding: 0;
          margin-top: 20px;
          white-space: nowrap;
          > div {
           white-space: normal;
            .label {
              flex-shrink: 0;
            }
            .value {
              word-break: break-all;
            }
          }
        }
      }
    }
  }
}
</style>
