<template>
  <div class="login">
    <div class="container">
      <div class="zmk-loginDiv">
        <p class="zmk-loginTitle">登 录</p>
        <form class="zmk-form">
          <div class="zmk-formDiv">
            <div class="zmk-phone">
              <input
                type="text"
                name="userName"
                id="userName"
                placeholder="请输入手机号"
                autocomplete="off"
                autofocus="autofocus"
                class="zmk-phoneInput"
                value
              >
              <label for="input-tel" class="zmk-areaCode">+86</label>
              <p class="zmk-error">未注册的手机号，点此快速注册</p>
              <p class="zmk-error">请输入11位手机号码</p>
            </div>
            <div class="zmk-password">
              <input
                type="text"
                name="verificationCode"
                id="verificationCode"
                placeholder="请输入短信验证码"
                autocomplete="off"
                autofocus="autofocus"
                value
              >
              <label for="input-tel" class="zmk-verificationCode zmk-linkBlue">获取验证码</label>
              
            </div>
            <button type="text" class="zmk-button">确 定</button>
          </div>
        </form>
        <div class="zmk-Message">
          <router-link to="/weblogin">用户名登录</router-link>
          <router-link to="/register">手机注册</router-link>
          <router-link to="#/" class="zmk-forget">忘记密码？</router-link>
        </div>
        <div class="text-center zmk-otherLogin">
          <p class="zmk-other">
            <span>选择其它方式登录</span>
          </p>
        </div>
        <div class="zmk-otherLoginPort">
          <router-link to="#/">
            <img src="@/assets/images/login/wechart.png" alt="微信">
          </router-link>
          <router-link to="#/">
            <img src="@/assets/images/login/qq.png" alt="QQ">
          </router-link>
          <router-link to="#/">
            <img src="@/assets/images/login/weibo.png" alt="微博">
          </router-link>
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

<style scope>
@import "../assets/css/login.css";
</style>