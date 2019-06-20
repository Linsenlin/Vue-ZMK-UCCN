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

    <!-- 产品及手册 -->
    <div class="product">
      <div class="ant-row">
        <div class="ant-col-12">
          <div class="adImg">
            <img src="@/assets/images/index/add_1.png" alt>
          </div>
        </div>
        <div class="ant-col-pull-12">
          <div class="adImg">
            <img src="@/assets/images/index/add_1.png" alt>
          </div>
        </div>
      </div>
    </div>
    <!-- 咨询入口 -->
    <div class="activity">
      <div class="ant-row" style="margin-left: -4px; margin-right: -4px;">
        <div class="ant-col-6 ant-col-offset-3" style="padding-left: 4px; padding-right: 4px;">
          <div class="acDetail">
            <div class="adItem">
              <div class="adImg">
                <img src="@/assets/images/index/weibo.png" alt>
              </div>
              <div class="adTitle">
                <div class="atText1">博客</div>
                <div class="atText2">SCIBEA引领智能美肤时代</div>
                <div>
                  <a class="atText3" href="#/">进一步了解</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="ant-col-6" style="padding-left: 4px; padding-right: 4px;">
          <div class="aDetail">
            <div class="adItem">
              <div class="adImg">
                <img src="@/assets/images/index/news.png" alt>
              </div>
              <div class="adTitle">
                <div class="atText1">新闻</div>
                <div class="atText2">SCIBEA引领智能美肤时代</div>
                <div>
                  <a class="atText3" href="#/">进一步了解</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="ant-col-6" style="padding-left: 4px; padding-right: 4px;">
          <div class="aDetail">
            <div class="adItem">
              <div class="adImg">
                <img src="@/assets/images/index/pritrue.png" alt>
              </div>
              <div class="adTitle">
                <div class="atText1">图片</div>
                <div class="atText2">SCIBEA引领智能美肤时代</div>
                <div>
                  <a class="atText3" href="#/">进一步了解</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 产品保障 -->
    <div class="advantage">
      <div class="ant-row" style="margin-left: -8px; margin-right: -8px;">
        <div class="ant-col-6 gutter-row" style="padding-left: 8px; padding-right: 8px;">
          <div class="adDetail">
            <div class="adImg">
              <img src="@/assets/images/index/ad1.png" alt>
            </div>
            <div class="adTitle">七天无理由退货</div>
          </div>
        </div>
        <div class="ant-col-6 gutter-row" style="padding-left: 8px; padding-right: 8px;">
          <div class="adDetail">
            <div class="adImg">
              <img src="@/assets/images/index/ad2.png" alt>
            </div>
            <div class="adTitle">15天退货保障</div>
          </div>
        </div>
        <div class="ant-col-6 gutter-row" style="padding-left: 8px; padding-right: 8px;">
          <div class="adDetail">
            <div class="adImg">
              <img src="@/assets/images/index/ad3.png" alt>
            </div>
            <div class="adTitle">30天换货保障</div>
          </div>
        </div>
        <div class="ant-col-6 gutter-row" style="padding-left: 8px; padding-right: 8px;">
          <div class="adDetail">
            <div class="adImg">
              <img src="@/assets/images/index/ad4.png" alt>
            </div>
            <div class="adTitle">一年包换</div>
          </div>
        </div>
      </div>
    </div>
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
        poster: "/images/index/banner_1.png", //你的封面地址
        width: document.documentElement.clientWidth,
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

//活动
.activity {
  width: 90%;
  margin: 50px auto;

  .adItem {
    width: 316px;
    margin: 0 auto;

    .adImg {
      text-align: center;
      margin-bottom: 20px;
    }

    .adTitle {
      width: 100%;
      font-weight: 500;

      .atText1 {
        color: #999;
        font-size: 14px;
      }

      .atText2 {
        color: #333;
        font-size: 18px;
        margin: 8px 0 20px 0;
      }

      a {
        color: #85c7d9;
        text-decoration: none;
        font-size: 14px;
      }
    }
  }
}

// 优势
.advantage {
  width: 100%;
  margin-left: 0;
  margin-right: 0;
  padding: 88px 0;
  box-sizing: border-box;
  text-align: center;
  .gutter-row {
    padding-left: 8px;
    padding-right: 8px;
  }
  .ant-row {
    width: 90%;
    height: 100%;
    margin: 0 auto !important;

    .adDetail {
      width: 160px;
      margin: 0 auto;
      padding: 38px 0;

      .adTitle {
        color: #333;
        font-size: 14px;
        font-weight: 400;
        margin-top: 20px;
      }
    }
  }
}
</style>
