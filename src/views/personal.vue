<template>
  <div class="home-page">
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
            <div class="value">{{ user.surplus }}元</div>
          </div>
          <router-link to="/cash" target="_blank" class="btn"
            >我要提现</router-link
          >
        </div>
      </div>
      <div class="colR">
        <div class="box">
          <div class="title">收益情况</div>
          <div class="list">
            <div class="item">
              <div class="value">{{ user.hours_profit }}</div>
              <div class="label">每小时收益（元）</div>
            </div>
            <div class="item">
              <div class="value">{{ user.days_profit }}</div>
              <div class="label">今天收益（元）</div>
            </div>
            <div class="item">
              <div class="value">{{ user.months_profit }}</div>
              <div class="label">本月收益（元）</div>
            </div>
            <div class="item">
              <div class="value">{{ user.profit }}</div>
              <div class="label">账户总收益（元）</div>
            </div>
          </div>
        </div>
        

        <div class="box">
          <div class="title">提现情况</div>
          <div class="list">
            <div class="item">
              <div class="value">{{ user.surplus }}</div>
              <div class="label">账户余额（元）</div>
            </div>
            <div class="item" @click="lookMoneyHisrory" style="cursor: pointer">
              <div class="value">{{ user.freezing_surplus }}</div>
              <div class="label">已提现金额（元）</div>
            </div>
            <div class="item">
              <div class="value">{{ user.be_amount }}</div>
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
        <el-button @click="lookMoneyHisrory">提现记录</el-button>
      </div>
    </div>

    <el-dialog
      title="提现记录"
      :visible.sync="dialogVisible"
      width="30%"
      @closed="closeModal"
    >
      <el-table :data="tableData" height="500" border style="width: 100%">
        <el-table-column prop="id" label="id" width="180"> </el-table-column>
        <el-table-column prop="created_at" label="提现申请时间">
        </el-table-column>
        <el-table-column prop="updated_at" label="提现成功时间">
        </el-table-column>
        <el-table-column prop="type_id" label="提现方式"> </el-table-column>
        <el-table-column prop="user_id" label="账号"> </el-table-column>
        <el-table-column prop="name" label="姓名"> </el-table-column>
        <el-table-column prop="updated_at" label="提现金额"> </el-table-column>
        <el-table-column prop="account" label="剩余余额"> </el-table-column>
        <el-table-column prop="states" label="审核状态"> </el-table-column>
        <el-table-column prop="remark" label="备注"> </el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>

<script>
import { UserInfo, GetCashList } from "@/services/api";
export default {
  data() {
    return {
      user: null,
      modal: false,
      dialogVisible: false,
      tableData: [
        {
          id: "",
          created_at: "",
          updated_at: ""
        }
      ]
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      UserInfo().then(({ data }) => {
        data.surplus = Number(data.surplus);
        this.user = data;
      });
    },
    //提现记录
    lookMoneyHisrory() {
      GetCashList().then(res => {
        this.tableData = res.data.data;
      });
      this.dialogVisible = true;
    },

    //关闭窗口
    closeModal() {
      this.dialogVisible = false;
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
    height: calc(100vh - 20px);
    .colL {
      padding: 0 15px;
      width: 320px;
      border: solid 1px #ccc;
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
        .title {
          font-size: 20px;
          text-align: center;
        }
        .box {
          border: solid 1px #a9a9a9;
          margin-top: 25px;
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
          border: solid 1px #a9a9a9;
          font-size: 18px;
          margin-top: 15px;
          cursor: pointer;
          background: -webkit-linear-gradient(bottom, #f1f1f1, #fff);
        }
      }
    }
    .colR {
      flex: 1;
      width: 1%;
      padding: 5px 15px 15px;
      border: solid 1px #ccc;
      margin-left: 10px;
      .box {
        clear: both;
        overflow: hidden;
        padding-bottom: 30px;
        .title {
          border-bottom: dashed 1px #ccc;
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
