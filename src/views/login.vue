<template>
  <div class="login-page">
    <div class="form">
      <div class="title">登录</div>
      <el-form ref="form" :model="form">
        <el-form-item label="" :style="{ marginBottom: '15px' }">
          <el-input
            v-model="form.email"
            placeholder="请输入您的账号"
            prefix-icon="el-icon-message"
          ></el-input>
        </el-form-item>
        <el-form-item :style="{ marginBottom: '15px' }" label="">
          <el-input
            type="password"
            v-model="form.password"
            placeholder="请输入您的密码"
            prefix-icon="el-icon-lock"
          >
          </el-input>
        </el-form-item>
        <el-form-item
          :style="{ marginBottom: '10px', position: 'relative' }"
          label=""
        >
          <el-input
            v-model="form.code"
            placeholder="请输入图片验证码"
            prefix-icon="el-icon-picture-outline"
            maxlength="6"
          >
          </el-input>
          <img
            :src="`http://advpc.muke.design/api/frontend/captcha?time=${time}`"
            class="codeImage"
            alt=""
            @click="renderImage"
          />
        </el-form-item>
        <div>
          <el-checkbox>记住密码</el-checkbox>
        </div>
        <div :style="{ paddingBottom: '15px', display: 'flex' }">
          <el-checkbox>我已阅读同意</el-checkbox>
          <div class="link" @click="openModal('user')">《用户协议》</div>
          <div class="text">和</div>
          <div class="link" @click="openModal('privacy')">《隐私政策》</div>
        </div>
        <el-button
          type="primary"
          :loading="loading"
          :style="{ width: '100%' }"
          :disabled="
            form.email.length === 0 ||
              form.password.length === 0 ||
              form.code.length === 0
          "
          @click="login"
          >登录</el-button
        >
      </el-form>
    </div>
  </div>
</template>
<script>
import { UserLogin, CheckCaptcha } from "@/services/api";
export default {
  components: {},
  data() {
    return {
      form: {
        email: "Pu3QZKn4@163.com",
        password: "admin",
        code: ""
      },
      time: null,
      loading: false
    };
  },
  mounted() {
    this.renderImage();
  },
  methods: {
    openModal(key) {
      window.open(`/#/rules/${key}`);
    },

    login() {
      const form = this.form;
      this.loading = true;
      CheckCaptcha({
        code: form.code
      })
        .then(() => {
          UserLogin(form)
            .then(({ data }) => {
              this.loading = false;
              sessionStorage.video_token = data.token;
              this.$router.push("/");
            })
            .catch(err => {
              this.loading = false;
              alert(err);
            });
        })
        .catch(err => {
          this.loading = false;
          alert(err);
        });
    },

    renderImage() {
      this.time = new Date().getTime();
    }
  }
};
</script>
<style lang="scss" scoped>
.login-page {
  clear: both;
  overflow: hidden;
  background-color: #9fc7c8;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .form {
    background-color: #fff;
    padding: 30px;
    .title {
      text-align: center;
      font-size: 28px;
      width: 320px;
      padding-bottom: 20px;
    }
    .link {
      color: #409eff;
      cursor: pointer;
    }
    .codeImage {
      position: absolute;
      height: 32px;
      top: 4px;
      right: 4px;
      cursor: pointer;
    }
  }
}
</style>
