<template>
  <div class="home-technology">
    <div class="vt-title">
      <i class="fa fa-tachometer"></i>
      <span>技术栈</span>
    </div>
    <div class="home-tech-list">
      <ul>
        <li v-for="(o, i) in list" :key="i" v-html="o"></li>
      </ul>
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
    this.list = this.vitaData.technology
  }
}
</script>

<style lang="scss">
.home-technology {
  .home-tech-list {
    text-align: left;
    padding: 0 20px 0 0;
    ul {
      li {
        text-align: left;
      }
    }
  }
}
</style>
