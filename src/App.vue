<template>
  <div id="app">
    <vt-header></vt-header>
    <vt-experience></vt-experience>
    <vt-technology></vt-technology>
    <vt-project></vt-project>
    <vt-evaluation></vt-evaluation>

<!--    <router-view/>-->
  </div>
</template>

<script>
import VtHeader from './views/home/header'
import VtExperience from './views/home/experience'
import VtProject from './views/home/project'
import VtTechnology from './views/home/technology'
import VtEvaluation from './views/home/evaluation'

export default {
  components: {
    VtHeader,
    VtExperience,
    VtProject,
    VtTechnology,
    VtEvaluation
  },
  mounted () {
    window.app = this
  }
}
</script>

<style lang="scss">
@import "./views/home/font-awesome-4.7.0/scss/font-awesome";

html, body {
  width: 100%;
  min-width: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  width: 100%;
  max-width: 1000px;
  margin: 0 auto;

  font-size: 16px;
  line-height: 1.7;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.vt-row {
  display: flex;
  align-items: center;
  @for $i from 1 through 12
  {
    .vt-col-#{$i}
    {
      flex: $i;
      flex-shrink: 0;
    }
  }
}

.vt-title {
  text-align: left;
  font-size: 18px;
  font-weight: bold;
  margin: 20px 0;
  .fa {
    width: 20px;
    text-align: center;
    margin: 0 6px 0 0;
    color: rgba(55,162,231, 1);
  }
}

code {
  padding: 0 2px;
  font-size: 16px;
  color: $cl-main;
  font-family: $font-ant-d;
}
</style>
