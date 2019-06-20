<template>
  <div class="register">
    <div class="container">
      <div class="zmk-regDiv">
        <p class="zmk-regTitle">注 册</p>
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
              <p class="zmk-error">请输入11位手机号码</p>
            </div>
            <div class="zmk-password">
              <input
                type="text"
                name="password"
                id="password"
                placeholder="请输入密码"
                autocomplete="off"
                autofocus="autofocus"
                value
              >
              <a href="#/">
                <img src="@/assets/images/login/show.png" alt="显示">
              </a>
              <div class="zmk-passwordRules">
                <p>•6 ～16 位字符</p>
                <p>•包含数字</p>
                <p>•包含字母</p>
              </div>
            </div>
          </div>
          <div class="text-center zmk-terms">
            注册 SCIBEA，即表示你同意 SCIBEA 的
            <br>
            <router-link to="/#" class="zmk-linkBlue link-underline" target="_blank">使用条款</router-link>和
            <router-link to="/#" class="zmk-linkBlue link-underline" target="_blank">隐私政策</router-link>
          </div>
          <button type="text" class="zmk-register">创建账号</button>
          <div class="zmk-login">
            <router-link to="/weblogin" class="zmk-linkBlue">登录</router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template><script>
export default {
  name: "register",
  data() {
    return {};
  }
};
</script>

<style scope>
@import "../assets/css/register.css";
</style>