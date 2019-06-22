import config from '@/config/config'

console.log(config);
console.log(config.url);
const register = config.url + '/user/GetVerifycode' //注册页验证码获取
console.log(register);
export default {
    register,
}
