<template>
  <div class="home-project">
    <div class="vt-title">
      <i class="fa fa-product-hunt"></i>
      <span>项目经历</span>
    </div>
    <div class="home-project-list">
      <div class="home-project-item" v-for="(o, i) in list" :key="i">
        <div class="proj-title">{{ o.title }}</div>
        <div class="proj-company-time">{{ o.companyTime }}</div>
        <div class="proj-tech-key">{{ o.techKey }}</div>
        <div class="proj-content1">
          <span class="label">项目描述:</span>
          <span v-html="o.content1"></span>
        </div>
        <div class="proj-content2">
          <span class="label">职责描述:</span>
          <span v-html="o.content2"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import from

export default {
  data () {
    return {
      list: []
    }
  },
  methods: {
  },
  created () {
  },
  mounted () {
    this.list = this.vitaData.project.filter(item => {
      return item.title
    })
  }
}
</script>

<style lang="scss">
.home-project {
  .home-project-list {
    .home-project-item {
      text-align: left;
      margin-bottom: 40px;
      .proj {
        &-title {
          font-size: 18px;
          font-weight: bold;
        }
        &-company-time {
          font-size: 14px;
          color: $cl-fz-grey;
        }
        &-tech-key {
          color: $cl-main;
        }
        &-content1, &-content2 {
          code {
            padding: 0 2px;
            font-size: 16px;
            color: $cl-main;
          }
          .label {
            font-weight: bold;
          }
        }
      }
    }
  }
}
</style>
