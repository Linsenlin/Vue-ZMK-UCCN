<template>
  <div class="index">
    <div class="banner" :style="styleObj">
      <div class="container">
        <div class="banner-text">
          <div class="slider-info">
            <a class="details" href="#/" role="button">了解详情 ></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import png from "@/assets/images/index/bg_xs.png";

// let png =
// "https://image01.oneplus.cn/shop/201906/13/1798/84063d5fccde396f568fc4e736c621f0.jpg";
export default {
  name: "index",
  data() {
    return {
      styleObj: {
        background: `url(${png}) no-repeat center center`,
        backgroundSize: "cover",
        height: "900px"
      }
    };
  }
};
</script>

<style lang="scss" scoped>
// .banner {
//   background: url(../assets/images/index/bg_xs.png) no-repeat center;
//   -webkit-background-size: cover;
//   -moz-background-size: cover;
//   -o-background-size: cover;
//   -ms-background-size: cover;
//   background-size: cover;
//   // height: 900px;
//   /* position: relative; */
// }
</style>
