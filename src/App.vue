<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
body {
  background-color: #f5f5f5;
}
body,
div {
  margin: 0;
  padding: 0;
  font-size: 14px;
  line-height: 2;
  .w960 {
    width: 960px;
    margin: 0 auto;
    clear: both;
    overflow: hidden;
  }
  a,
  a:visited {
    color: #000;
    text-decoration: none;
  }
  a:hover {
    color: #0066b3;
  }
  img {
    display: block;
  }
}
input,
button,
textarea {
  margin: 0;
  padding: 0;
  border-width: 0;
  outline-style: none;
}
.el-carousel__arrow {
  background-color: transparent;
  &:hover {
    background-color: transparent;
  }
}
.p {
  color: #fff;
  font-size: 12px;
  line-height: 1.2;
  padding: 3px 0;
}
</style>
