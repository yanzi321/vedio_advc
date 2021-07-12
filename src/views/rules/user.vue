<template>
  <div class="rules-user-page">
    <div class="container" v-if="row">
      <div class="title">{{ row.name }}</div>
      <div class="content" v-html="row.value"></div>
    </div>
  </div>
</template>
<script>
import { GetRules } from "@/services/api";
export default {
  data() {
    return {
      row: null
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      const loading = this.$loading({
        lock: true,
        text: "协议加载中",
        spinner: "el-icon-loading"
      });
      GetRules().then(({ data }) => {
        this.row = data[0];
        loading.close();
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.rules-user-page {
  clear: both;
  overflow: hidden;
  .container {
    padding: 15px;
    .title {
      font-size: 20px;
      font-weight: bold;
      text-align: center;
    }
    .content {
      font-size: 16px;
      padding-top: 15px;
    }
  }
}
</style>
