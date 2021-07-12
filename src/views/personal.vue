<template>
  <div class="home-page">
    <div class="tab">
      <router-link class="li el-icon-video-play" to="/">视频中心</router-link>
      <router-link class="li el-icon-user-solid active" to="/personal"
        >个人中心</router-link
      >
    </div>
    <div class="main" v-if="user">
      <div class="colL">
        <div class="user">
          <div class="icon el-icon-user"></div>
          <div class="nick">{{ user.name }}</div>
          <div class="time">当天登录时间：{{ user.last_login_time }}</div>
        </div>
        <div class="info">
          <div class="title">用户信息</div>
          <div class="box">
            <div class="key">账号</div>
            <div class="value">{{ user.email }}</div>
          </div>
          <div class="box">
            <div class="key">余额</div>
            <div class="value">{{ user.surplus }}</div>
          </div>
          <div class="btn">我要提现</div>
        </div>
      </div>
      <div class="colR">
        <div class="box">
          <div class="title">收益情况</div>
          <div class="list">
            <div class="item">
              <div class="value">0.00</div>
              <div class="label">每小时收益（元）</div>
            </div>
            <div class="item">
              <div class="value">0.00</div>
              <div class="label">今天收益（元）</div>
            </div>
            <div class="item">
              <div class="value">0.00</div>
              <div class="label">本月收益（元）</div>
            </div>
            <div class="item">
              <div class="value">0.00</div>
              <div class="label">账户总收益（元）</div>
            </div>
          </div>
        </div>

        <div class="box">
          <div class="title">提现情况</div>
          <div class="list">
            <div class="item">
              <div class="value">0.00</div>
              <div class="label">账户余额（元）</div>
            </div>
            <div class="item">
              <div class="value">0.00</div>
              <div class="label">已提现金额（元）</div>
            </div>
            <div class="item">
              <div class="value">0.00</div>
              <div class="label">可提现金额（元）</div>
            </div>
          </div>
        </div>

        <div class="box">
          <div class="title">在线时长</div>
          <div class="list">
            <div class="item">
              <div class="value">{{ user.today_login }}</div>
              <div class="label">今天在线时长</div>
            </div>
            <div class="item">
              <div class="value">{{ user.week_login }}</div>
              <div class="label">本周在线时长</div>
            </div>
            <div class="item">
              <div class="value">{{ user.month_login }}</div>
              <div class="label">本月在线时长</div>
            </div>
            <div class="item">
              <div class="value">{{ user.all_login }}</div>
              <div class="label">总在线时长</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { UserInfo } from "@/services/api";
export default {
  components: {},
  data() {
    return {
      user: null
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      UserInfo().then(({ data }) => {
        this.user = data;
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.home-page {
  clear: both;
  overflow: hidden;
  background-color: #9fc7c8;
  height: 100vh;
  .tab {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 44px;
    padding-top: 15px;
    .li {
      font-size: 24px;
      margin: 0 15px;
      display: flex;
      align-items: center;
      line-height: 1;
      width: 180px;
      height: 44px;
      justify-content: center;
      &.active {
        background-color: #7f7f7f;
        color: #fff;
      }
      &::before {
        margin-right: 4px;
      }
    }
  }
  .main {
    display: flex;
    padding: 15px;
    height: calc(100vh - 89px);
    .colL {
      padding: 0 15px;
      width: 320px;
      border: solid 1px #797979;
      background-color: #fff;
      .user {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-top: 25px;
        .icon {
          font-size: 40px;
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: solid 2px #7d7d7d;
          color: #7d7d7d;
          border-radius: 50%;
        }
        .nick {
          font-size: 16px;
          margin-top: 12px;
        }
        .time {
          font-size: 16px;
        }
      }
      .info {
        margin-top: 15px;
        padding: 8px 15px 15px;
        .title {
          font-size: 20px;
          text-align: center;
        }
        .box {
          border: solid 1px #a9a9a9;
          margin-top: 25px;
          .key {
            font-size: 20px;
            line-height: 36px;
            text-align: center;
            background-color: #fff;
            color: #7d7d7d;
            width: 80px;
            margin: -18px auto 0;
          }
          .value {
            font-weight: bold;
            text-align: center;
            padding: 10px 0;
            font-size: 20px;
          }
        }
        .list {
          padding-top: 5px;
          .item {
            display: flex;
            padding-top: 6px;
            .key {
              color: #848484;
              font-size: 16px;
              margin-right: 10px;
            }
            .value {
              font-size: 16px;
              font-weight: bold;
              flex: 1;
              width: 1%;
            }
          }
        }
        .btn {
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: solid 2px #a9a9a9;
          font-size: 18px;
          margin-top: 15px;
          cursor: pointer;
        }
      }
    }
    .colR {
      flex: 1;
      width: 1%;
      padding: 5px 15px 15px;
      border: solid 1px #797979;
      background-color: #fff;
      margin-left: 10px;
      .box {
        clear: both;
        overflow: hidden;
        padding-bottom: 30px;
        .title {
          border-bottom: dashed 1px #797979;
          font-size: 20px;
        }
        .list {
          display: flex;
          padding-top: 5px;
          .item {
            width: 25%;
            .value {
              font-weight: bold;
              font-size: 20px;
            }
            .label {
              line-height: 1.2;
            }
          }
        }
      }
    }
  }
}
</style>
