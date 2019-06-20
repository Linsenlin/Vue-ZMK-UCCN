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
                name="userPhone"
                id="userPhone"
                placeholder="请输入手机号"
                autocomplete="off"
                autofocus="autofocus"
                maxlength="11"
                v-model="userPhone"
                @blur="userPhoneFun('blur')"
              >
              <p class="zmk-error" v-show="phoneError">请输入11位手机号码</p>
            </div>
            <div class="zmk-password">
              <input
                type="search"
                name="password"
                id="password"
                placeholder="请输入密码"
                autocomplete="off"
                autofocus="autofocus"
                maxlength="16"
                v-model="password"
              >
              <a href="#/">
                <img src="@/assets/images/login/show.png" alt="显示">
              </a>
              <p class="zmk-error" v-show="passwordError">用户名或密码错误</p>
            </div>
            <button type="text" class="zmk-button">确 定</button>
          </div>
        </form>
        <div class="zmk-Message">
          <router-link to="/messageLogin">手机短信登录</router-link>
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
    return {
      userPhone: null, //手机号码
      password: "", //密码
      phoneError: false, //手机号码错误提示颜色
      passwordError: false //密码错误提示颜色
    };
  },
  methods: {
    // 失去焦点和得到焦点的验证方法，name为要验证的字段名,type为blur或focus
    userPhoneFun(type) {
      //非手机号或号码小于11位或号码不为空
      if (
        !/^1[3456789]\d{9}$/.test(this.userPhone) ||
        this.userPhone.length < 11 ||
        this.userPhone === null
      ) {
        this.phoneError = true;
        return false;
      } else {
        this.phoneError = false;
      }
    }
  },
  watch: {},
  computed: {
    // userPhone: function() {
    //   if (this.userPhone < 11) {
    //     console.log("号码不正确");
    //   }
    //   //     return this.firstname + '-' + this.lastname
    // }
  }
};
</script>

<style scope>
@import "../assets/css/login.css";
</style> 