<template>
  <div class="cash">
    <el-form :model="form" ref="form" :rules="rules" label-width="110px">
      <el-form-item prop="type_id" label="提现方式：">
        <el-select v-model="form.type_id">
          <el-option
            v-for="(item, index) in cashArray"
            :key="index"
            :label="item.type"
            :value="item.id"
          ></el-option>
        </el-select>
        <el-button @click="moneyMsg">提现说明</el-button>
      </el-form-item>
      <el-form-item prop="name" label="姓名：">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item prop="account" label="提现账号：">
        <el-input v-model="form.account"></el-input>
      </el-form-item>
      <el-form-item prop="safety" label="安全码：">
        <el-input v-model="form.safety"></el-input>
      </el-form-item>
      <el-form-item prop="amount" label="提现金额：">
        <el-input-number
          v-model="form.amount"
          :min="user.surplus > 0 ? 1 : 0"
          :max="user ? user.surplus : 0"
        ></el-input-number>
        <span :style="{ color: 'red', marginLeft: '10px' }"
          >【预计可提现金币】：{{ user ? user.surplus : 0 }}</span
        >
      </el-form-item>
      <el-form-item prop="code" label="验证码：">
        <el-row type="flex" align="middle">
          <el-input
            v-model="form.code"
            :style="{ width: '120px', marginRight: '10px' }"
          ></el-input>
          <img
            :src="`http://advpc.muke.design/api/frontend/captcha?time=${time}`"
            height="40"
            alt=""
            @click="renderImage"
          />
        </el-row>
      </el-form-item>
      <el-form-item :style="{ marginBottom: '0' }">
        <el-button type="primary" :loading="loading" @click="start"
          >提交</el-button
        >
      </el-form-item>

      <el-form-item :style="{ marginTop: '20px' }">
        <el-button @click="moneyHistory">提现记录</el-button>
      </el-form-item>
    </el-form>

    <el-dialog
      title="提现说明"
      :visible.sync="dialog"
      width="30%"
      @closed="closeModal"
    >
      <div v-html="msg.value"></div>
    </el-dialog>
  </div>
</template>

<script>
import { GetCashType, DoCash, UserInfo, GetCashMsg } from "@/services/api";
export default {
  data() {
    return {
      form: {
        type_id: "",
        name: "",
        account: "",
        safety: "",
        amount: "",
        code: ""
      },
      cashArray: [],
      dialog: false,
      msg: {},
      rules: {
        type_id: [
          { required: true, message: "请选择提现方式", trigger: "change" }
        ],
        name: [{ required: true, message: "请输入姓名", trigger: "blur" }],
        account: [
          { required: true, message: "请输入提现账号", trigger: "blur" }
        ],
        safety: [{ required: true, message: "请输入安全码", trigger: "blur" }],
        amount: [
          { required: true, message: "请输入提现金额", trigger: "blur" }
        ],
        code: [{ required: true, message: "请输入验证码", trigger: "blur" }]
      },
      loading: false,
      time: null,
      user: ""
    };
  },
  mounted() {
    this.init();
    this.renderImage();
  },
  methods: {
    init() {
      UserInfo()
        .then(({ data }) => {
          console.log(data);
          data.surplus = Number(data.surplus);
          this.user = data;
        })
        .then(() => {
          GetCashType().then(({ data }) => {
            this.cashArray = data.data;
          });
        });
    },

    start() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          this.loading = true;
          DoCash(this.form)
            .then(({ data }) => {
              this.loading = false;
              this.modal = false;
              console.log(data);
            })
            .catch(err => {
              this.loading = false;
              alert(err);
            });
        }
      });
    },

    //提现说明
    moneyMsg() {
      this.dialog = true;
      GetCashMsg().then(res => {
        console.log(res.data);
        this.msg = res.data[3];
      });
    },

    //提现记录
    moneyHistory() {
      this.$router.push("/personal");
    },

    closeModal() {
      this.dialog = false;
    },

    renderImage() {
      this.time = new Date().getTime();
    }
  }
};
</script>
<style lang="scss" scoped>
.cash {
  padding: 20px;
}
</style>
