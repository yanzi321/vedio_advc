<template>
  <div class="login-page">
    <div class="form">
      <div class="title">登录</div>
      <el-form ref="form" :model="form">
        <el-form-item label="" :style="{ marginBottom: '15px' }">
          <el-input
            v-model="form.email"
            placeholder="请输入您的账号"
            prefix-icon="el-icon-user"
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
        <template v-if="isShow">
          <el-form-item
            :style="{ marginBottom: '10px', position: 'relative' }"
            label=""
          >
            <el-input
              v-model="form.code"
              placeholder="请输入图片验证码"
              prefix-icon="el-icon-message"
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
        </template>
        <div>
          <el-checkbox v-model="forget">记住密码</el-checkbox>
        </div>
        <div :style="{ paddingBottom: '15px', display: 'flex' }">
          <el-checkbox v-model="agree">我已阅读同意</el-checkbox>
          <router-link to="/rules/user" target="_blank" class="link"
            >《用户协议》</router-link
          >
          <div class="text">和</div>
          <router-link to="/rules/privacy" target="_blank" class="link"
            >《隐私政策》</router-link
          >
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
import { UserLogin, CheckCaptcha, GetIp, ChinaIp } from "@/services/api";
export default {
  components: {},
  data() {
    return {
      form: {
        email: "Pu3QZKn4@163.com",
        password: "admin",
        code: "",
      },
      ip: "",
      agree: true,
      forget: true,
      time: null,
      loading: false,
      isShow: false,
      count: 0,
    };
  },
  mounted() {
    this.getIp();
    this.renderImage();
  },
  methods: {
    getIp() {
      GetIp().then(({ origin }) => {
        this.ip = origin;
      });
    },

    login() {
      const form = this.form;
      const count = this.count;
      this.loading = true;
      if (count >= 5) {
        CheckCaptcha({
          code: form.code,
        })
          .then(() => {
            ChinaIp({
              ip: this.ip,
            }).then(({ data }) => {
              if (data.country_id !== "CN") {
                return alert("请先开启代理服务");
              }
              UserLogin(form)
                .then(({ data }) => {
                  this.loading = false;
                  localStorage.video_token = data.token;
                  this.$router.push("/");
                })
                .catch((err) => {
                  this.count = this.count + 1;
                  this.loading = false;
                  this.renderImage();
                  alert(err);
                });
            });
          })
          .catch((err) => {
            this.loading = false;
            this.renderImage();
            alert(err);
          });
      } else {
        ChinaIp({
          ip: this.ip,
        }).then(({ data }) => {
          if (data.country_id !== "CN") {
            return alert("请先开启代理服务");
          }
          UserLogin(form)
            .then(({ data }) => {
              this.loading = false;
              localStorage.video_token = data.token;
              this.$router.push("/");
            })
            .catch((err) => {
              this.count = this.count + 1;
              this.loading = false;
              this.renderImage();
              alert(err);
            });
        });
      }
    },

    renderImage() {
      this.time = new Date().getTime();
    },
  },
};
</script>
<style lang="scss" scoped>
.login-page {
  clear: both;
  overflow: hidden;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .form {
    background-color: #fff;
    padding: 20px 30px 30px;
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
