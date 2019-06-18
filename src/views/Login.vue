<template>
  <div class="login">
    <div class="plTitle">登 录</div>
    <form class="ant-form ant-form-horizontal login-form">
      <div class="ant-row ant-form-item">
        <div class="ant-form-item-control-wrapper">
          <div class="ant-form-item-control">
            <span class="ant-form-item-children">
              <input placeholder="手机号" type="text" id="userName" class="ant-input" value>
            </span>
          </div>
        </div>
      </div>
      <div class="ant-row ant-form-item">
        <div class="ant-form-item-control-wrapper">
          <div class="ant-form-item-control">
            <span class="ant-form-item-children">
              <input type="password" placeholder="密码" id="password" class="ant-input" value>
              <img src="@/assets/images/login/show.png" alt class="eye">
            </span>
          </div>
        </div>
      </div>
      <div class="ant-row ant-form-item">
        <div class="ant-form-item-control-wrapper">
          <div class="ant-form-item-control">
            <span class="ant-form-item-children">
              <button type="submit" class="ant-btn login-form-button ant-btn-primary">
                <span>登 录</span>
              </button>
            </span>
          </div>
        </div>
      </div>
    </form>
    <div class="plContent">
      <div class="pcContainer">
        <div class="plMessage">
          <a href="#/login_SMS">
            <div>手机短信登录</div>
          </a>
          <a href="#/">
            <div class="pmMiddle">手机注册</div>
          </a>
          <a href="#/">
            <div>忘记密码？</div>
          </a>
        </div>
        <div class="plOtherlogin">
          <div class="poEmpty"></div>
          <div class="poText">其他方式登录</div>
          <div class="poEmpty"></div>
        </div>
        <div class="plThirdpart">
          <a href="#/">
            <img src="@/assets/images/login/wechart.png" alt="微信">
          </a>
          <a href="#/">
            <img src="@/assets/images/login/qq.png" alt="QQ">
          </a>
          <a href="#/">
            <img src="@/assets/images/login/weibo.png" alt="微博">
          </a>
        </div>
      </div>
    </div>
  </div>
</template><script>
export default {
  name: "login",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scope>
// 个人中心
//登录
.login {
  width: 100%;
  background-color: #f7f7f7;
  padding: 50px 0 106px 0;
  box-sizing: border-box;
  margin-top: 100px;
  
  .plTitle {
    width: 39%;
    margin: 0 auto;
    color: #000;
    font-weight: 400;
    font-size: 28px;
    text-align: center;
    background-color: #fff;
    padding: 30px 0 70px 0;
    box-sizing: border-box;
  }
  .login-form {
    width: 39% !important;
    margin: 0 auto;
    background-color: #fff;

    .ant-form-item {
      width: 74%;
      margin: 0 auto;

      &:not(:last-child) {
        margin-bottom: 40px;
      }
      .eye {
        position: absolute;
        right: 20px;
        top: 6px;
      }
      .ant-input {
        height: 48px;
        color: #999;
        font-size: 16px;
        font-weight: 400;
        border: solid 1px #ccc;
      }
      .ant-btn-primary {
        margin: 20px 0 62px 0;
        width: 100%;
        height: 60px;
        background-color: #eee;
        border-color: #eee;
        color: #999;
        font-size: 22px;
        font-weight: 400;
      }
    }
  }
  .plContent {
    width: 39%;
    margin: 0 auto;
    background-color: #fff;

    .pcContainer {
      width: 57%;
      margin: 0 auto;
      // 短信登录
      .plMessage {
        width: 100%;
        display: flex;
        justify-content: space-evenly;

        div {
          width: 108px;
          height: 18px;
          line-height: 18px;
          text-align: center;
        }
        .pmMiddle {
          margin: 0 18px 0 18px;
          border-left: solid 2px #333;
          border-right: solid 2px #333;
        }
        a {
          color: #ccc;
          font-size: 16px;
          font-weight: 400;
        }
      }
      // 其他方式登录
      .plOtherlogin {
        width: 100%;
        margin: 0 auto;
        margin: 48px 0 30px 0;
        color: #999;
        font-size: 14px;
        font-weight: 400;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .poEmpty {
          width: 100px;
          height: 2px;
          background-color: #ccc;
        }
        .poText {
          margin: 0 20px;
        }
      }
      // 第三方登录
      .plThirdpart {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        padding-bottom: 128px;
        box-sizing: border-box;
      }
    }
  }
}
.Personcenter {
  width: 100%;
}
</style>