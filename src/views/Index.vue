<template>
  <div class="index">
    <!-- banner 广告 -->
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
    <!-- 视频播放 -->
    <div class="video">
      <video-player
        class="video-player vjs-custom-skin"
        ref="videoPlayer"
        :playsinline="true"
        :options="playerOptions"
      ></video-player>
    </div>

    <!-- 产品手册 -->
    


  </div>
</template>
<script>
let aa = "banner_1.png";
let bb = "banner_2.png";
// 2.组件内引用
import { videoPlayer } from "vue-video-player";
import "video.js/dist/video-js.css";
import "vue-video-player/src/custom-theme.css";
// import "@/assets/css/video.css";
export default {
  name: "index",
  data() {
    return {
      bgUrl: [
        {
          banner: require("@/assets/images/index/" + aa)
        },
        { banner: require("@/assets/images/index/" + bb) }
      ],
      playerOptions: {
        playbackRates: [0.5, 1.0, 1.5, 2.0], //播放速度
        autoplay: false, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: "zh-CN",
        aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            src: "http://vjs.zencdn.net/v/oceans.mp4", // 路径
            type: "video/mp4" // 类型
          }
        ],
        poster: "../../assets/images/index/banner_1.png", //你的封面地址
        // width: document.documentElement.clientWidth,
        notSupportedMessage: "此视频暂无法播放，请稍后再试", //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true //全屏按钮
        }
      }
    };
  },
  components: {
    videoPlayer
  }
};
</script>

<style lang="scss" scoped>
.banner {
  margin-bottom: 10px;
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
