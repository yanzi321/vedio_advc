<template>
  <div class="home-page">
    <div class="tab">
      <router-link class="li el-icon-video-play active" to="/"
        >视频中心</router-link
      >
      <router-link class="li el-icon-user-solid" to="/personal"
        >个人中心</router-link
      >
    </div>
    <div class="main">
      <div class="colL" v-if="user">
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
        <div class="info">
          <div class="title">运行信息</div>
          <div class="list">
            <div class="item">
              <div class="key">小时收益：</div>
              <div class="value">{{ user.hours_profit }}</div>
            </div>
            <div class="item">
              <div class="key">当日收益：</div>
              <div class="value">{{ user.days_profit }}</div>
            </div>
            <div class="item">
              <div class="key">本月收益：</div>
              <div class="value">{{ user.months_profit }}</div>
            </div>
            <div class="item">
              <div class="key">运行状态：</div>
              <div class="status"></div>
            </div>
            <div class="item">
              <div class="key">在线时长：</div>
              <div class="value">{{ user.today_login }}</div>
            </div>
          </div>
        </div>
        <div class="bar">
          <div class="btn">启动</div>
          <div class="btn">停止</div>
        </div>
      </div>
      <div class="colR" v-if="video">
        <video :src="video.url" class="video"></video>
      </div>
    </div>
  </div>
</template>

<script>
import { UserInfo, GetVideo } from "@/services/api";
export default {
  components: {},
  data() {
    return {
      user: null,
      video: null,
    };
  },
  mounted() {
    this.init();
    // this.videoList();
  },
  methods: {
    init() {
      UserInfo().then(({ data }) => {
        this.user = data;
      });
    },

    videoList() {
      GetVideo()
        .then(({ data }) => {
          console.log(data);
          // this.video = data;
        })
        .catch((err) => {
          alert(err);
        });
    },
  },
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
    .colL {
      padding: 0 15px;
      width: 320px;
      .info {
        border: solid 1px #797979;
        background-color: #fff;
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
        }
      }
      .bar {
        border: solid 1px #797979;
        background-color: #fff;
        margin-top: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 12px 22px;
        .btn {
          width: 92px;
          height: 38px;
          border: solid 1px #b8b8b8;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          font-weight: bold;
          &:nth-child(2) {
            color: #848484;
          }
        }
      }
    }
    .colR {
      flex: 1;
      width: 1%;
      padding: 15px;
      .video {
        height: 570px;
      }
    }
  }
}
</style>
