<template>
  <div class="login">
    <div class="container">
      <div class="zmk-loginDiv">
        <p class="zmk-loginTitle">登 录</p>
        <form class="zmk-form" @submit.prevent="onSubmit">
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
              <p class="zmk-error" v-show="phoneError">{{userPhoneText}}</p>
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
                @blur="userPasswordFun('blur')"
              >
              <a href="#/">
                <img src="@/assets/images/login/show.png" alt="显示" @click="showPassword">
              </a>
              <p class="zmk-error" v-show="passwordError">{{passwordText}}</p>
            </div>
            <button type="text" class="zmk-button" @click="userConfirmFun">确 定</button>
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
      passwordError: false, //密码错误提示颜色
      userPhoneText: "请输入11位手机号码",
      passwordText: "请输入您的登录密码",
      passwordType: "password"
    };
  },
  methods: {
    //阻止表单默认的提交
    onSubmit() {
      return false;
    },
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
    },
    userPasswordFun(type) {
      if (this.password.length < 6 || this.password === "") {
        this.passwordError = true;
        return false;
      } else {
        this.passwordError = false;
      }
    },
    //登录确定按钮
    userConfirmFun() {
      if (this.password === "" && this.userPhone === null) {
        this.passwordError = true;
        this.phoneError = true;
      }
    },
    showPassword() {
      console.log("2");
      if (this.passwordType === "password") {
        this.passwordType = "text";
      } else {
        this.passwordType = "password";
      }
    }
  },
  watch: {
    //密码加星号
    password(newName, oldName) {
      this.password = newName.replace(/./g, "•");
    }
  },
  computed: {}
};
</script>

<style scope>
@import "../assets/css/login.css";
</style> 