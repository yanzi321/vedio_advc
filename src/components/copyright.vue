<template>
  <div class="copy-right">
    <div class="copy-right_main w960">
      <img src="../assets/copy_right_img.gif" alt="" />
      <div class="copy-right_text">
        <div class="li">本网站支持IPv6</div>
        <div class="li">
          © 版权所有中国建设银行 京ICP备13030780号 京公网安备：110102000450
        </div>
        <div class="li">总行地址：中国北京西城区金融大街25号 邮编：100033</div>
        <div class="li">手机网站：m.ccb.com 客服与投诉热线：95533</div>
      </div>
      <div class="copy-right_right">
        <div class="item">
          <img src="../assets/wb.382411751461452652833.jpg" alt="" />
          <div class="text">官方微博</div>
        </div>
        <div class="item">
          <img src="../assets/weixin.382411751461452652852.jpg" alt="" />
          <div class="text">微信银行</div>
        </div>
        <div class="item">
          <img src="../assets/sj.jpg" alt="" />
          <div class="text">手机银行</div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.copy-right {
  height: 160px;
  background-color: #0066b3;
  .copy-right_main {
    height: 160px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .copy-right_text {
      color: #fff;
      margin-left: 20px;
    }
    .copy-right_right {
      margin-left: auto;
      display: flex;
      .item {
        width: 60px;
        padding: 5px;
        margin-left: 34px;
        background-color: #fff;
        .text {
          color: #0066b3;
          font-size: 12px;
          text-align: center;
          line-height: 1.5;
        }
      }
    }
  }
}
</style>
