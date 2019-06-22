import config from '@/config/config'
// console.log(config);
// console.log(config.url);







const register = config.url + '/user/GetVerifycode' //注册页验证码获取，GET请求
const isRegister = config.url + '/user/IsMobileRegist' //判断手机号码是否已经注册，GET请求
const passwordLogin = config.url + '/user/LoginByPass' //用户登录，(手机号码和密码)，GET请求
const verifycodeLogin = config.url + '/user/LoginByVerifycode' //用户登录，(手机号码和验证码)，GET请求
// console.log(register);
export default {
    register,
    isRegister,
    passwordLogin,
    verifycodeLogin
}
