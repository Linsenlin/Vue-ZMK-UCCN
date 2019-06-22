<template>
  <div class="register">
    <div class="container">
      <div class="zmk-regDiv">
        <p class="zmk-regTitle">注 册</p>
        <form class="zmk-form" @submit.prevent="onSubmit">
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
                maxlength="11"
                v-model="form.mobile"
                @blur="mobileFun()"
                ref="mobile"
              >
              <label for="input-tel" class="zmk-areaCode">+86</label>
              <p class="zmk-error" ref="phoneError" v-show="phoneError">{{mobileText}}</p>
            </div>
            <div class="zmk-password">
              <input
                type="text"
                name="password"
                id="password"
                placeholder="请输入密码"
                autocomplete="off"
                autofocus="autofocus"
                maxlength="16"
                @blur="userPasswordFun()"
                ref="password"
              >
              <a href="#/">
                <!-- <img src="@/assets/images/login/show.png" alt="显示"> -->
              </a>
              <p class="zmk-passwordRules" ref="passwordError" v-show="passwordError">
                <span>•6 ～16 位字符</span>
                <span>•包含数字</span>
                <span>•包含字母</span>
              </p>
            </div>
            <div class="zmk-password">
              <input
                type="text"
                name="verificationCode"
                id="verificationCode"
                placeholder="请输入短信验证码"
                autocomplete="off"
                maxlength="6"
                autofocus="autofocus"
                @blur="verifycodeFun()"
                ref="verifycode"
              >
              <label
                for="input-tel"
                class="zmk-verificationCode zmk-linkBlue"
                disabled
                @click="getVerifycode"
              >获取验证码</label>
              <p class="zmk-error" ref="codeError" v-show="codeError">{{verifycodeText}}</p>
            </div>
          </div>
          <div class="text-center zmk-terms">
            注册 SCIBEA，即表示你同意 SCIBEA 的
            <br>
            <router-link to="/#" class="zmk-linkBlue link-underline" target="_blank">使用条款</router-link>和
            <router-link to="/#" class="zmk-linkBlue link-underline" target="_blank">隐私政策</router-link>
          </div>
          <button type="text" class="zmk-register" @click="registerFun">创建账号</button>
          <div class="zmk-login">
            <router-link to="/weblogin" class="zmk-linkBlue">登录</router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "register",
  data() {
    return {
      form: {
        mobile: "", //手机号码
        password: "", //密码
        verifycode: "" //验证码
      },
      phoneError: false, //手机号码错误提示颜色
      passwordError: false, //密码错误提示颜色
      codeError: false, //验证码错误提示颜色
      mobileText: "请输入11位手机号码",
      passwordText: "请输入您的登录密码",
      verifycodeText: "请输入验证码",
      confirmBtn: {},
      disabled: true //禁用按钮状态
    };
  },
  methods: {
    //阻止表单默认的提交
    onSubmit() {
      return false;
    },
    //手机输入框焦点事件
    mobileFun() {
      this.$utils.mobileFun(
        this.form.mobile,
        this.$refs.mobile,
        this.$refs.phoneError
      );
    },
    //密码输入框事件
    userPasswordFun(type) {
      if (this.form.password.length < 6 || this.form.password === "") {
        this.passwordError = true;
        this.$refs.password.style.borderColor = "#eb0028";
        return false;
      } else {
        this.$refs.password.style.borderColor = "#ccc";
        this.passwordError = false;
      }
    },
    //验证码输入框事件
    verifycodeFun() {
      console.log(this.form.verifycode);
      if (this.form.verifycode.length === null) {
        console.log("11");
        this.codeError = true;
        this.$refs.verifycode.style.borderColor = "#eb0028";
        return false;
      } else {
        console.log("22");
        this.codeError = false;
        this.$refs.verifycode.style.borderColor = "#ccc";
      }
    },
    getVerifycode() {
      console.log(this.$api);
      console.log(this.$api.register);
      console.log("1");
      this.$axios.defaults.headers["Content-Type"] =
        "application/x-www-form-urlencoded;charset=UTF-8"; //此处是增加的代码，设置请求头的类型
      this.$axios
        .get(this.$api.register + "?mobile=" + this.form.mobile)
        .then(function(res) {
          console.log(res);
          // var data = res.data;
          //返回的数据都在res.data里面
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    registerFun() {
      this.$axios
        .get(
          "http://39.98.167.238:8096/user/LoginByVerifycode?mobile=15882453200&verifycode=174514"
        )
        .then(function(res) {
          console.log(res);
          // var data = res.data;
          //返回的数据都在res.data里面
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  },
  watch: {}
};
</script>

<style scope>
@import "../assets/css/register.css";
</style>