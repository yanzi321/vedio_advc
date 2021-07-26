<template>
  <div class="home-page">
    <div class="main">
      <div class="colL">
        <template v-if="user">
          <div class="info">
            <div class="title">用户信息</div>
            <router-link to="/personal" target="_blank" class="box">
              <div class="key">账号</div>
              <div class="value">{{ user.email }}</div>
            </router-link>
            <div class="box">
              <div class="key">余额</div>
              <div class="value">{{ user.surplus }}元</div>
            </div>
            <router-link to="/cash" target="_blank" class="btn"
              >我要提现</router-link
            >
          </div>
          <div class="info" style="height: calc(100vh - 555px)">
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
                <div class="status">停止</div>
              </div>
              <div class="item">
                <div class="key">在线时长：</div>
                <div class="value">{{ user.today_login }}</div>
              </div>
            </div>
          </div>
          <div class="bar">
            <template v-if="isDisable">
              <div class="btn disabled">启动</div>
              <div class="btn disabled">停止</div>
            </template>
            <template v-else>
              <template v-if="status">
                <div class="btn" @click="startVideo">启动</div>
                <div class="btn disabled">停止</div>
              </template>
              <template v-else>
                <div class="btn disabled">启动</div>
                <div class="btn" @click="stopVideo">停止</div>
              </template>
            </template>
          </div>
        </template>
      </div>
      <div class="colR">
        <div class="video">
          <video
            id="videoPlayer"
            ref="videoPlayer"
            :src="video"
            class="preview"
          ></video>
        </div>
        <div class="daily">
          <div class="title">运行日志</div>
          <div class="console" v-html="console"></div>
        </div>
      </div>
      <div class="tools">
        <div class="item" data-key="当前时间：">{{ form.date }}</div>
        <div class="item" data-key="公网IP：">{{ form.ip }}</div>
        <div class="item" data-key="服务器端口：">80</div>
        <div class="item" data-key="网络状态：">{{ form.status }}</div>
        <div class="item" data-key="连接速度：">{{ form.speed }} ms</div>
        <div class="item" data-key="客户端版本：">v1.0.0</div>
      </div>
    </div>

    <el-dialog
      title="公告"
      :visible.sync="dialogVisible"
      width="30%"
      @closed="closeModal"
    >
      <div>{{ advContent }}</div>
    </el-dialog>
  </div>
</template>

<script>
import {
  UserInfo,
  GetVideo,
  GetIp,
  ChinaIp,
  GetBulletin
} from "@/services/api";
export default {
  data() {
    return {
      user: null,
      video: null,
      timer: null,
      form: {
        date: "",
        ip: "",
        speed: "",
        status: ""
      },
      console: "",
      advContent: "",
      isDisable: true,
      status: true,
      dialogVisible: false
    };
  },
  async mounted() {
    this.print("视频启动中...");
    const video_status = localStorage.is_modal || null;
    if (!video_status) {
      await this.bulletin();
    }
    await this.init();
    await this.getTime();
    await this.newWordSpeed();
    await this.videoList();
  },
  methods: {
    bulletin() {
      GetBulletin().then(({ data }) => {
        this.advContent = data.content;
        this.dialogVisible = true;
      });
    },

    init() {
      UserInfo().then(({ data }) => {
        data.surplus = Number(data.surplus);
        this.user = data;
      });
    },

    print(text) {
      const a = new Date();
      const month = a.getMonth() + 1;
      const day = a.getDate();
      const hour = a.getHours();
      const minute = a.getMinutes();
      const seconds = a.getSeconds();
      const content = this.console;
      this.console = `${content}<div class="p">${a.getFullYear()}-${
        month < 10 ? "0" + month : month
      }-${day < 10 ? "0" + day : day} ${hour < 10 ? "0" + hour : hour}:${
        minute < 10 ? "0" + minute : minute
      }:${seconds < 10 ? "0" + seconds : seconds} ${text}</div>`;
    },

    getTime() {
      const a = new Date();
      const year = a.getFullYear();
      const month = a.getMonth() + 1;
      const day = a.getDate();
      const hour = a.getHours();
      const minute = a.getMinutes();
      this.form.date = `${year}年${month}月${day}日${
        hour < 10 ? "0" + hour : hour
      }时${minute < 10 ? "0" + minute : minute}分`;
    },

    getIp() {
      GetIp().then(({ origin }) => {
        this.form.ip = origin;
        ChinaIp({
          ip: origin
        }).then(({ data }) => {
          if (data.country_id === "CN") {
            this.isDisable = true;
            this.print(
              `当前IP：${data.queryIp}，位置：${data.country} ${data.region} ${data.city} ${data.isp}，请使用代理`
            );
          }
        });
      });
    },

    newWordSpeed() {
      const that = this;
      that.timer = setInterval(() => {
        clearInterval(that.timer);
        that.form.speed = navigator.connection.downlink;
        that.form.status = navigator.onLine ? "在线" : "断线";
        that.getTime();
        that.newWordSpeed();
        that.getIp();
      }, 5000);
    },

    videoList() {
      GetVideo()
        .then(({ data }) => {
          this.video = data.url;
          this.isDisable = false;
          this.print("视频启动成功");
        })
        .catch(err => {
          this.print(err);
        });
    },

    startVideo() {
      this.status = false;
      document.getElementById("videoPlayer").play();
      this.print("视频开始播放");
    },

    stopVideo() {
      this.status = true;
      document.getElementById("videoPlayer").pause();
      this.print("视频暂停播放");
    },

    closeModal() {
      this.dialogVisible = false;
      localStorage.is_modal = 1;
    }
  }
};
</script>
<style lang="scss" scoped>
.home-page {
  clear: both;
  overflow: hidden;
  .main {
    display: flex;
    padding: 10px;
    flex-wrap: wrap;
    .colL {
      width: 350px;
      height: calc(100vh - 92px);
      .info {
        border: solid 1px #ccc;
        padding: 8px 15px 15px;
        margin-bottom: 10px;
        .title {
          font-size: 20px;
          text-align: center;
        }
        .box {
          border: solid 1px #a9a9a9;
          margin-top: 25px;
          cursor: pointer;
          display: block;
          .key {
            font-size: 18px;
            line-height: 36px;
            text-align: center;
            background-color: #f5f5f5;
            color: #7d7d7d;
            width: 80px;
            margin: -18px auto 0;
          }
          .value {
            font-weight: bold;
            text-align: center;
            padding: 5px 0 12px;
            font-size: 20px;
          }
        }
        .list {
          padding-top: 5px;
          overflow: hidden;
          overflow-y: auto;
          .item {
            display: flex;
            padding-top: 6px;
            align-items: center;
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
            .status {
              font-size: 16px;
            }
          }
        }
        .btn {
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: solid 1px #a9a9a9;
          font-size: 18px;
          margin-top: 15px;
          cursor: pointer;
          background: -webkit-linear-gradient(bottom, #f1f1f1, #fff);
        }
      }
      .bar {
        border: solid 1px #ccc;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 15px;
        .btn {
          width: calc(50% - 8px);
          height: 38px;
          border: solid 1px #b8b8b8;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          font-weight: bold;
          background: -webkit-linear-gradient(bottom, #f1f1f1, #fff);
          cursor: pointer;
          &.disabled {
            opacity: 0.5;
          }
        }
      }
    }
    .colR {
      flex: 1;
      width: 1%;
      margin-left: 10px;
      .video {
        height: calc(100vh - 363px);
        background-color: #fff;
        border: solid 1px #ccc;
        .preview {
          width: 100%;
          height: 100%;
          background-color: #fff;
        }
      }
      .daily {
        margin-top: 26px;
        border: solid 1px #ccc;
        .title {
          width: 80px;
          text-align: center;
          line-height: 32px;
          height: 32px;
          background-color: #f5f5f5;
          margin: -16px 0 0 10px;
        }
        .console {
          height: 200px;
          background-color: #000;
          padding: 5px 8px;
          margin: 5px 10px 10px;
          overflow: hidden;
          overflow-y: auto;
        }
      }
    }
    .tools {
      width: calc(100% - 2px);
      border: solid 1px #ccc;
      height: 60px;
      margin-top: 10px;
      display: flex;
      align-items: center;
      .item {
        margin: 0 20px;
        font-weight: bold;
        &::before {
          content: attr(data-key);
          font-weight: normal;
          color: #999;
        }
      }
    }
  }
}
</style>
