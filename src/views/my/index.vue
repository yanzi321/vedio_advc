<template>
  <div class="login-main">
    <div class="header">
      <div class="header_top">
        <div class="w960">
          <div class="header_info_left">
            <router-link to="" class="li">个人客户</router-link>
            <router-link to="" class="li">私人银行</router-link>
            <router-link to="" class="li">公司机构</router-link>
            <router-link to="" class="li">小微企业</router-link>
            <img src="../../assets/sr_icon.png" alt="" />
          </div>
          <div class="header_info_right">
            <router-link to="" class="li contact">在线客服</router-link>
            <div class="line"></div>
            <router-link to="" class="li">国内分行</router-link>
            <router-link to="" class="li">诚聘英才</router-link>
            <router-link to="" class="li">English</router-link>
            <div class="line"></div>
            <router-link to="" class="li">建行云</router-link>
          </div>
        </div>
      </div>
      <div class="menu">
        <div class="w960">
          <div class="logo"></div>
        </div>
      </div>
    </div>
    <div class="nav">
      <div class="w960">
        <router-link to="/my" class="li active">首页</router-link>
        <router-link to="" class="li">我的账户</router-link>
        <router-link to="" class="li">转账汇款</router-link>
        <router-link to="" class="li">投资理财</router-link>
        <router-link to="" class="li">资产管理</router-link>
        <router-link to="" class="li">信用卡</router-link>
        <router-link to="" class="li">贷款服务</router-link>
        <router-link to="" class="li">生活服务</router-link>
      </div>
    </div>
    <div class="user-bar">
      <div class="w960">
        <img
          src="../../assets/B2CMainPlat_07_ImageServlet.jpg"
          class="avatar"
          width="100"
          height="100"
        />
        <div class="cont">
          <div class="t1">早上好，王先生</div>
          <div class="li">我的积分：0</div>
          <div class="li">手机号码：1775***7710</div>
          <div class="li">上次登录日期：2021/06/01 15:54:37</div>
        </div>
        <div class="task">
          <div class="item">
            <div class="text">暂无待办事项</div>
          </div>
          <div class="item">
            <div class="text">暂无消息</div>
          </div>
        </div>
        <div class="menu">
          <div class="item">
            <img src="../../assets/10033.png" width="26" height="26" alt="" />
            <div class="text">账户查询</div>
          </div>
          <div class="item">
            <img src="../../assets/01005.png" width="26" height="26" alt="" />
            <div class="text">建行转账</div>
          </div>
          <div class="item">
            <img src="../../assets/01011.png" width="26" height="26" alt="" />
            <div class="text">基金</div>
          </div>
          <div class="item">
            <img src="../../assets/05002.png" width="26" height="26" alt="" />
            <div class="text">账户贵金属</div>
          </div>
          <div class="item">
            <img src="../../assets/02006.png" width="26" height="26" alt="" />
            <div class="text">理财产品</div>
          </div>
          <div class="item">
            <img src="../../assets/02015.png" width="26" height="26" alt="" />
            <div class="text">定制</div>
          </div>
        </div>
      </div>
    </div>
    <div class="wrapper w960">
      <div class="colL">
        <div class="con1">
          <div class="tab">
            <div class="li active">手机充值</div>
            <div class="li">转账</div>
            <div class="li">缴费</div>
          </div>
          <div class="radio">
            <div class="item">
              <input type="radio" class="radio" name="radio" />
              给本人充值
            </div>
            <div class="item">
              <input type="radio" class="radio" name="radio" />
              输入号码
            </div>
          </div>
          <div class="tool-bar">
            <div class="text">177****7710</div>
          </div>
          <div class="box">
            <div class="label">充值金额:</div>
            <select class="selectbox">
              <option value="1">50</option>
              <option value="2">100</option>
              <option value="3">200</option>
              <option value="4">300</option>
              <option value="5">500</option>
            </select>
          </div>
          <div class="box">
            <div class="label">付款账号:</div>
            <select class="selectbox">
              <option value="1">尾号5925</option>
            </select>
          </div>
          <div class="btn">立即充值</div>
        </div>

        <div class="con2">
          <div class="title">我想要...</div>
          <div class="list">
            <div class="item">
              <div class="key">出国金融</div>
              <div class="value">充分满足您的跨境消费需求</div>
            </div>
            <div class="item">
              <div class="key">我要买房</div>
              <div class="value">为您提供快速融资服务</div>
            </div>
            <div class="item">
              <div class="key">献爱心</div>
              <div class="value">帮助更多困难家庭和孩子</div>
            </div>
          </div>
        </div>

        <div class="con3">
          <div class="title">精彩活动</div>
          <div class="li">· [限时抢购]每天十点准时开抢</div>
        </div>

        <div class="con4">
          <div class="title">投资雷达</div>
        </div>
      </div>
      <div class="colR">
        <div class="con1">
          <div class="bar">
            <div class="l1">资产负债概览</div>
            <div class="l2">（当前数据截至2021-06-15 07:12:14）</div>
            <div class="l3">资产负债分析></div>
          </div>
        </div>

        <div class="con2">
          <div class="bar">
            <div class="l1">账户预览</div>
            <div class="l3">账户查询></div>
          </div>
          <div class="carbox_tp">
            <div class="box">
              <div class="bar1">
                <img src="../../assets/logo.png" width="86" alt="" />
                <div class="key">龙卡通</div>
              </div>
              <div class="bar2">已签约</div>
              <div class="bar3">6217 0020 00** ***5 952</div>
              <div class="bar4">
                <div class="key">可用余额（元）</div>
                <div class="value">24.98</div>
              </div>
              <div class="bar5">
                <router-link to="" class="li">明细</router-link>
                <router-link to="" class="li">转账</router-link>
                <router-link to="" class="li">理财</router-link>
                <router-link to="" class="li">显示余额</router-link>
              </div>
            </div>
          </div>
        </div>

        <div class="con2">
          <div class="bar">
            <div class="l1">精品推荐</div>
          </div>
          <div class="imglist">
            <img src="../../assets/suying.png" alt="" />
            <img src="../../assets/xuangou.png" alt="" />
            <img src="../../assets/goumai.png" alt="" />
          </div>
        </div>

        <div class="con2">
          <div class="bar">
            <div class="l1">我的收款人</div>
            <div class="l3">更多></div>
          </div>
          <div class="empty">您尚未保存过收款人信息</div>
        </div>

        <div class="con2">
          <div class="bar">
            <div class="l1">最近交易</div>
            <div class="l3">在途交易查询></div>
          </div>
          <div class="empty">您最近没有相关交易</div>
        </div>

        <div class="con2">
          <div class="bar">
            <div class="l1">可能感兴趣</div>
          </div>
          <img src="../../assets/xingqu.png" width="100%" alt="" />
        </div>
      </div>
    </div>
    <div class="footer_top">
      <div class="w960">
        <img src="../../assets/f1.jpg" alt="" />
        <router-link to="" class="li">服务价目表</router-link>
        <router-link to="" class="li">网站地图</router-link>
        <router-link to="" class="li">友情链接</router-link>
        <router-link to="" class="li">网点及ATM</router-link>
        <router-link to="" class="li" :style="{ marginLeft: '40px' }"
          >繁体 / English</router-link
        >
      </div>
    </div>
    <copyright></copyright>
  </div>
</template>
<script>
import Copyright from "@/components/copyright";
export default {
  components: {
    Copyright
  },
  data() {
    return {
      activeIndex: 1
    };
  }
};
</script>
<style lang="scss" scoped>
.login-main {
  .header {
    .header_top {
      height: 50px;
      background-color: #0066b3;
      .w960 {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 50px;
        .header_info_left {
          height: 50px;
          display: flex;
          align-items: center;
          .li {
            color: #83c6ff;
            margin-right: 20px;
          }
        }
        .header_info_right {
          display: flex;
          align-items: center;
          .li {
            font-size: 12px;
            color: #83c6ff;
            padding: 0 4px;
            &.contact {
              display: flex;
              align-items: center;
              &::before {
                content: "";
                width: 20px;
                height: 50px;
                background: url(../../assets/zx_icon.png) no-repeat left;
              }
            }
          }
          .line {
            width: 1px;
            height: 10px;
            margin: 0 9px 0 13px;
            background-color: #83c6ff;
          }
        }
      }
    }
    .menu {
      height: 84px;
      .w960 {
        height: 84px;
        display: flex;
        align-items: center;
        .logo {
          width: 356px;
          height: 36px;
          background: url(../../assets/logo_login.png) no-repeat;
        }
      }
    }
  }
  .nav {
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    .w960 {
      display: flex;
      .li {
        width: 120px;
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
      }
    }
  }
  .user-bar {
    background: url(../../assets/theme_s_0.png) no-repeat;
    background-size: cover;
    height: 140px;
    display: flex;
    justify-content: center;
    .w960 {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .avatar {
        width: 100px;
        height: 100px;
        margin-right: 12px;
      }
      .cont {
        color: #fff;
      }
      .task {
        flex: 1;
        width: 1%;
        border-left: solid 1px rgba(255, 255, 255, 0.5);
        display: flex;
        align-items: center;
        margin-left: 10px;
        height: 118px;
        .item {
          width: 50%;
          color: #fff;
          text-align: center;
        }
      }
      .menu {
        display: flex;
        flex-wrap: wrap;
        width: 288px;
        margin-left: auto;
        border-left: solid 1px rgba(255, 255, 255, 0.5);
        .item {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          width: calc(100% / 3);
          margin-top: 9px;
          .icon {
            width: 26px;
            height: 26px;
          }
          .text {
            color: #fff;
            font-size: 12px;
          }
        }
      }
    }
  }
  .wrapper {
    display: flex;
    margin-top: 20px;
    padding-bottom: 45px;
    .colL {
      width: 230px;
      border: solid 1px #ddd;
      .con1 {
        padding: 12px 12px 22px;
        border-bottom: solid 1px #ddd;
        padding-bottom: 50px;
        .tab {
          display: flex;
          height: 34px;
          border-bottom: solid 1px #ddd;
          .li {
            width: calc(100% / 3);
            text-align: center;
            line-height: 34px;
            cursor: pointer;
            &.active {
              position: relative;
              color: #0066b3;
              &::after {
                content: "";
                position: absolute;
                left: 0;
                right: 0;
                bottom: -1px;
                height: 3px;
                background-color: #0066b3;
              }
            }
          }
        }
        .radio {
          display: flex;
          padding-top: 10px;
          .item {
            display: flex;
            align-items: center;
            width: 50%;
            .radio {
              margin-right: 8px;
            }
          }
        }
        .tool-bar {
          height: 30px;
          line-height: 30px;
          padding: 5px 0;
        }
        .box {
          display: flex;
          align-items: center;
          padding: 5px 0;
          .label {
          }
          .selectbox {
            width: 1%;
            flex: 1;
            height: 30px;
            border: solid 1px #0066b3;
            padding: 0 5px;
            margin-left: 8px;
          }
        }
        .btn {
          height: 30px;
          background-color: #0066b3;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 5px;
          border-radius: 4px;
        }
      }
      .con2 {
        padding: 12px 12px 30px;
        border-bottom: solid 1px #ddd;
        .title {
          height: 24px;
          line-height: 24px;
          font-weight: bold;
          background-color: #efefef;
          font-size: 16px;
        }
        .list {
          .item {
            padding: 10px 0 8px;
            .key {
              font-weight: bold;
              color: #0066b3;
              line-height: 1.2;
            }
            .value {
              color: #999;
              line-height: 1.2;
              margin-top: 8px;
            }
          }
        }
      }
      .con3 {
        padding: 12px 12px 40px;
        border-bottom: solid 1px #ddd;
        .title {
          font-weight: bold;
          line-height: 1.2;
          font-size: 16px;
        }
        .li {
          color: #999;
          margin-top: 5px;
        }
      }
      .con4 {
        padding: 12px;
        .title {
          font-weight: bold;
          line-height: 1.2;
          font-size: 16px;
        }
      }
    }
    .colR {
      flex: 1;
      width: 1%;
      margin-left: 15px;
      .con1 {
        border: solid 1px #ddd;
        .bar {
          border-bottom: solid 1px #ddd;
          background-color: #efefef;
          height: 50px;
          display: flex;
          align-items: center;
          padding: 0 10px;
          justify-content: space-between;
          .l1 {
            font-size: 20px;
          }
          .l2 {
            margin-left: 15px;
          }
          .l3 {
            margin-left: auto;
            color: #0066b3;
          }
        }
      }

      .con2 {
        border: solid 1px #ddd;
        margin-top: 12px;
        .bar {
          border-bottom: solid 1px #ddd;
          background-color: #efefef;
          height: 50px;
          display: flex;
          align-items: center;
          padding: 0 10px;
          justify-content: space-between;
          .l1 {
            font-size: 20px;
          }
          .l2 {
            margin-left: 15px;
          }
          .l3 {
            margin-left: auto;
            color: #0066b3;
          }
        }
        .carbox_tp {
          padding: 8px;
          .box {
            border: solid 1px #ddd;
            padding: 8px 5px 0;
            width: 222px;
            .bar1 {
              display: flex;
              align-items: center;
              justify-content: space-between;
              .key {
                width: 44px;
                height: 16px;
                line-height: 16px;
                text-align: center;
                font-size: 12px;
                border-radius: 6px;
                background-color: #98b8d9;
                color: #fff;
              }
            }
            .bar2 {
              text-align: right;
              line-height: 1.2;
              color: #bbb;
              font-size: 12px;
              margin-top: 4px;
            }
            .bar3 {
              height: 30px;
              line-height: 30px;
              color: #999;
            }
            .bar4 {
              display: flex;
              align-items: center;
              height: 30px;
              .key {
                color: #999;
              }
              .value {
                font-weight: bold;
              }
            }
            .bar5 {
              display: flex;
              align-items: center;
              justify-content: space-between;
              padding: 0 5px 2px;
              .li {
                color: #0066b3;
                line-height: 30px;
              }
            }
          }
        }
        .empty {
          text-align: center;
          padding: 10px 0;
        }
        .imglist {
          display: flex;
          padding: 7px;
          justify-content: space-between;
        }
      }
    }
  }
  .footer_top {
    height: 58px;
    background-color: #025a9d;
    .w960 {
      display: flex;
      align-items: center;
      height: 58px;
      .li {
        color: #83c6ff;
        margin-left: 20px;
      }
    }
  }
}
</style>
