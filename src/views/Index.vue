<template>
  <div class="index">
    <div class="banner" :style="styleObj">
      <div class="container">
        <div class="banner-text">
          <div class="slider-info">
            <h3>We Provide Best Photographer</h3>
            <a class="btn btn-primary mt-3" href="services.html" role="button">Read more</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import png from '@/assets/images/index/bg_xs.png'
export default {
  name: "index",
  data() {
    return {
      styleObj: {
        background: `url(${png}) no-repeat center center`,
        backgroundSize: "cover",
        height: "900px"
      },
      aa:'222'
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
