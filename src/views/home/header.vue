<template>
  <div class="home-header">
    <div class="vt-title">
      <i class="fa fa-user-circle-o"></i>
      个人信息
    </div>
    <div class="vt-row">
      <div class="avatar-div">
        <div class="avatar">
          <img src="./assets/avatar.png">
        </div>
      </div>
      <div class="vt-row vt-col-1 header-detail">
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
          <i class="fa fa-envelope"></i>
          <span class="">513900383@qq.com</span>
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
  width: 100%;
  .vt-row {
    flex-wrap: wrap;
    i.fa {
      font-size: 18px;
      width: 24px;
      text-align: center;
      margin-right: 18px;
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
    width: 148px;
    height: 148px;
    border-radius: 50%;
    background-color: #42b983;
    overflow: hidden;
    img {
      margin-top: -10px;
    }
  }
  .header-detail {
    padding: 0 0 0 30px;
  }
  .label {
    width: 80px;
    &:after {
      content: ':'
    }
  }

  @media all and (max-width: 500px) {
    .avatar-div {
      width: 100%;
      margin-bottom: 30px;
      .avatar {
        margin: 0 auto;
      }
    }
    .header-detail {
      padding: 0 10px 0 10px;
      i.fa {
        font-size: 14px;
        width: 20px;
        margin-right: 8px;
      }
      .vt-w-25 {
        font-size: 14px;
      }
    }
  }
}
</style>
