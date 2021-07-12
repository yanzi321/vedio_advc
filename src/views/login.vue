<template>
  <div class="login-page">
    <div class="form">
      <div class="title">登录</div>
      <el-form ref="form" :model="form" :rules="rules">
        <el-form-item prop="email" label="">
          <el-input
            v-model="form.email"
            placeholder="请输入您的账号"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password" label="">
          <el-input
            type="password"
            v-model="form.password"
            placeholder="请输入您的密码"
          ></el-input>
        </el-form-item>
        <div>
          <el-checkbox>记住密码</el-checkbox>
        </div>
        <div :style="{ paddingBottom: '15px' }">
          <el-checkbox>我已阅读同意《用户协议》和《隐私政策》</el-checkbox>
        </div>
        <el-button
          type="primary"
          :loading="loading"
          :style="{ width: '100%' }"
          @click="login"
          >登录</el-button
        >
      </el-form>
    </div>
  </div>
</template>
<script>
import { UserLogin } from "@/services/api";
export default {
  components: {},
  data() {
    return {
      form: {
        email: "Pu3QZKn4@163.com",
        password: "admin"
      },
      loading: false,
      rules: {
        email: {
          required: true,
          message: "请输入您的账号",
          trigger: "blur"
        },
        password: {
          required: true,
          message: "请输入您的密码",
          trigger: "blur"
        }
      }
    };
  },
  methods: {
    login() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          this.loading = true;
          UserLogin(this.form)
            .then(({ data }) => {
              this.loading = false;
              sessionStorage.video_token = data.token;
              this.$router.push("/");
            })
            .catch(err => {
              this.loading = false;
              this.$message.error(err);
            });
        }
      });
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
  }
}
</style>
