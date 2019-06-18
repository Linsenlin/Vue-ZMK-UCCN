<template>
  <div class="header">
    <div class="ant-affix">
      <div class="header-container">
        <div class="ant-row">
          <div class="ant-col-8">
            <a class="logo" href="#/aboutus">
              <img src="@/assets/images/header/logo.png" alt="SCIBEA">
            </a>
          </div>
          <div class="ant-col-8">
            <div class="ant-row headerCenter">
              <div class="ant-col-6">
                <router-link to="/" class="hcFont active">首页</router-link>
              </div>
              <div class="ant-col-6">
                <router-link to="/store" class="hcFont">商城</router-link>
              </div>
              <div class="ant-col-6">
                <router-link to="/brand" class="hcFont">品牌</router-link>
              </div>
              <div class="ant-col-6">
                <router-link to="/service" class="hcFont">服务</router-link>
              </div>
            </div>
          </div>
          <div class="ant-col-8">
            <div class="ant-row headerRight">
              <div class="ant-col-8">
                <router-link to="/search" class="hrIcon">
                  <img src="@/assets/images/header/search.png" alt="搜索">
                </router-link>
              </div>
              <div class="ant-col-8">
                <router-link to="/shopcart" class="hrIcon">
                  <img src="@/assets/images/header/shopcart.png" alt="购物车">
                </router-link>
              </div>
              <div class="ant-col-8">
                <router-link to="/login" class="hrIcon">
                  <img src="@/assets/images/header/login.png" alt="登录">
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss">
.header {
  width: 100%;

  .ant-affix {
    width: 100%;
    background-color: #fff;
    position: fixed;
    top: 0px;
    left: 0px;
    width: 1903px;

    .header-container {
      width: 69%;
      height: 80px;
      line-height: 80px;
      font-size: 16px;
      margin: 0 auto;
      text-align: center;
      background-color: #fff;

      a {
        color: #333;
        text-decoration: none;

        &.router-link-exact-active {
          color: #999;
        }
      }

      .logo {
        display: block;
        width: 146px;
        height: 24px;
        margin: 28px auto;

        img {
          display: block;
          width: 146px;
          height: 24px;
        }
      }

      .headerCenter {
        width: 96%;

        .hcFont {
          position: relative;
        }
      }

      .headerRight {
        width: 50%;
        margin: 0 auto;

        .hrIcon {
          display: block;
          width: 20px;
          height: 20px;
          margin: 28px auto;

          img {
            display: block;
            width: 20px;
            height: 20px;
          }
        }
      }
    }
  }
}
</style>