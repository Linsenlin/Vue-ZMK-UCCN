<template>
  <div class="footer">
    <div class="footer-container">
      <div class="fc-main">
        <div class="ant-row">
          <div class="ant-col-18">
            <div class="ant-row" style="margin-left: -8px; margin-right: -8px;">
              <div class="ant-col-6" style="padding-left: 8px; padding-right: 8px;">
                <div class="fmTitle">SCIBEA产品</div>
                <div class="fmDetail">
                  <div>
                    <a href="#/footer">洁面仪</a>
                  </div>
                  <div>
                    <a href="#/footer">精华导入</a>
                  </div>
                  <div>
                    <a href="#/footer">按摩仪</a>
                  </div>
                  <div>
                    <a href="#/footer">黑头仪</a>
                  </div>
                </div>
              </div>
              <div class="ant-col-6" style="padding-left: 8px; padding-right: 8px;">
                <div class="fmTitle">热门活动</div>
                <div class="fmDetail">
                  <div>
                    <a href="#/footer">限时抢购</a>
                  </div>
                  <div>
                    <a href="#/footer">分销返利20%</a>
                  </div>
                  <div>
                    <a href="#/footer">会员最高5折</a>
                  </div>
                </div>
              </div>
              <div class="ant-col-6" style="padding-left: 8px; padding-right: 8px;">
                <div class="fmTitle">关于SCIBEA</div>
                <div class="fmDetail">
                  <div>
                    <a href="#/footer">了解scibea</a>
                  </div>
                  <div>
                    <a href="#/footer">加入scibea</a>
                  </div>
                  <div>
                    <a href="#/footer">会员福利</a>
                  </div>
                </div>
              </div>
              <div class="ant-col-6" style="padding-left: 8px; padding-right: 8px;">
                <div class="fmTitle">服务支持</div>
                <div class="fmDetail">
                  <div>
                    <a href="#/home_returngoods">购买帮助</a>
                  </div>
                  <div>
                    <a href="#/footer">用户手册</a>
                  </div>
                  <div>
                    <a href="#/footer">寄修服务</a>
                  </div>
                  <div>
                    <a href="#/footer">联系我们</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="ant-col-6 fmRight">
            <div class="fmDetail">
              <div>
                <img src alt
                class="tel"> 400-1234-5678
              </div>
              <div class="fdTime">周一至周五 9:00-18:00</div>
              <div class="wechat">
                <img src alt>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="fc-copyright">
        <div>© 2013-2018 OnePlus. All Rights Reserved. (粤ICP备13080605号-4)</div>
        <div>粤公网安备 44030402001407号粤公网安备 44030402001407号</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss">
/*  尾部样式 */
.footer {
  width: 100%;
  background-color: #f7f7f7;
  border-top: solid 2px #ccc;

  .footer-container {
    width: 71%;
    margin: 0 auto;

    .fc-main {
      height: 79%;
      color: #333;
      font-weight: 400;
      padding: 60px 0 70px 0;
      box-sizing: border-box;

      .fmRight {
        text-align: center;
        padding-top: 16px;
        box-sizing: border-box;
      }

      .fmTitle {
        font-size: 22px;
      }

      .fmDetail {
        margin-top: 16px;

        div {
          margin-bottom: 12px;

          a {
            font-size: 16px;
            color: #333;
          }
        }

        &:last-child {
          .tel {
            display: inline-block;
            width: 21px;
            height: 21px;
            margin-right: 8px;
          }

          .fdTime {
            margin: 24px 0 30px 0;
          }

          .wechat img {
            width: 28px;
            height: 22px;
          }
        }
      }
    }

    .fc-copyright {
      height: 21%;
      border-top: solid 2px #ccc;
      color: #000;
      font-size: 14px;
      font-weight: 400;
      padding: 24px 0;
      box-sizing: border-box;
    }
  }
}
</style>