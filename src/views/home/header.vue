<template>
  <div class="home-header">
    <div class="vt-title">
      <i class="fa fa-user-circle-o"></i>
      个人信息
    </div>
    <div class="vt-row">
      <div class="vt-col-1">
        <div class="avatar">
          <img src="">
        </div>
      </div>
      <div class="vt-col-8 vt-row" style="padding: 0 0 0 30px">
        <div class="vt-w-25 ">
          <i class="fa fa-user"></i>
          <span>陈基涛</span>
        </div>
        <div class="vt-w-25 ">
          <i class="fa fa-map-marker"></i>
          <span>广东 ● 汕头</span>
        </div>
        <div class="vt-w-25 ">
          <i class="fa fa-birthday-cake"></i>
          <span class="">1991.06</span>
        </div>
        <div class="vt-w-25 ">
          <i class="fa fa-birthday-cake"></i>
          <span class=""></span>
        </div>
        <div class="vt-w-25 ">
          <i class="fa fa-graduation-cap"></i>
          <span class="">惠州学院 ● 本科</span>
        </div>
        <div class="vt-w-25 ">
          <i class="fa fa-wrench"></i>
          <span class="">网络工程</span>
        </div>
        <div class="vt-w-25 ">
          <i class="fa fa-unlock-alt"></i>
          <span class="">2014.07</span>
        </div>
        <div class="vt-w-25 ">
          <i class="fa fa-phone"></i>
          <span class="">13715906312</span>
        </div>
        <div class="vt-w-25 " style="min-width: 250px">
          <i class="fa fa-github-alt"></i>
          <span class="">https://github.com/AjiMIde</span>
        </div>

      </div>
    </div>
  </div>
</template>

<style lang="scss">
.home-header {
  .vt-row {
    flex-wrap: wrap;
    i.fa {
      font-size: 18px;
      width: 20px;
      text-align: center;
      margin-right: 8px;
      :before {
        vertical-align: middle;
      }
    }
    .vt-w-25 {
      flex: auto;
      min-width: 160px;
      width: 25%;
      text-align: left;
      margin-bottom: 20px;
    }
  }
  .avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #42b983;
  }
  .label {
    width: 80px;
    &:after {
      content: ':'
    }
  }
}
</style>
