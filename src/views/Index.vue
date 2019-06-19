<template>
  <div class="index">
    <div
      class="banner"
      v-for="(item,index) in bgUrl"
      :key="index"
      :style="{ background: 'url('+ item.banner +') no-repeat center center', backgroundSize: 'cover',height:'680px'}"
    >
      <p>{{item.banner}}</p>
      <div class="banner-text">
        <a class="details" href="#/">了解详情 ></a>
        <a class="buy" href="#/">购买 ></a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "index",
  data() {
    return {
      bgUrl: [
        {
          banner: require("@/assets/images/index/banner_1.png")
        },
        { banner: require("@/assets/images/index/banner_2.png") }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.banner {
  .banner-text {
    width: 100%;
    text-align: center;
    .details {
      display: inline-flex;
      padding-top: 200px;
    }

    .buy {
      margin-left: 30px;
    }
  }
}
</style>
