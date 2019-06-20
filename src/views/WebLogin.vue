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
                @blur="userPhoneFun('user_Phone','blur')"
              >
              <p class="zmk-error" v-if="phoneError">请输入11位手机号码</p>
            </div>
            <div class="zmk-password">
              <input
                type="search"
                name="password"
                id="password"
                placeholder="请输入密码"
                autocomplete="off"
                autofocus="autofocus"
                v-model="password"
              >
              <a href="#/">
                <img src="@/assets/images/login/show.png" alt="显示">
              </a>
              <p class="zmk-error" v-if="passwordError">用户名或密码错误</p>
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
      userPhone: null,
      password: "",
      phoneError: false,
      passwordError: false
    };
  },
  methods: {
    // 失去焦点和得到焦点的验证方法，name为要验证的字段名,type为blur或focus
    userPhoneFun(name, type) {
      //号码不为空
      if (this.userPhone === null) {
        console.log("号码空的");
        this.phoneError = true;
        return;
      }
      if (this.userPhone.length < 11) {
        console.log("号码不正确");
        this.phoneError = true;
        //   // if (type == "blur") {
        //   //   this.companyName.animate = false;
        //   // } else {
        //   //   this.companyName.animate = true;
        //   //   return;
        //   // }
        //   // if (this.companyName.companyName.trim().length == 0) {
        //   //   this.companyName.valid = false;
        //   //   this.companyName.message = "请输入企业名称";
        //   //   return false;
        //   // } else {
        //   //   this.companyName.valid = true;
        //   //   return true;
        //   // }
      }
// !/^1[345678]\d{9}$/.test(this.phone)
      if (this.userPhone.length === 11) {
        console.log("号码11位正确");
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