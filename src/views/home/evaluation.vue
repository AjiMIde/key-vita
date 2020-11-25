<template>
  <div class="home-evaluation">
    <div class="vt-title">
      <i class="fa fa-star"></i>
      <span>个人评价</span>
    </div>
    <div class="content" v-html="content"></div>
    <div></div>
  </div>
</template>

<script>
// import from

export default {
  data () {
    return {
      content: ''
    }
  },
  methods: {
  },
  created () {
  },
  mounted () {
    this.content = this.vitaData.evaluation.desc
  }
}
</script>

<style lang="scss">
.home-evaluation {
  .content {
    padding: 0 20px 0 20px;
    text-align: left;
    word-break: break-all;
  }
}
</style>
