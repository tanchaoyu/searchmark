<template>
  <div class="container">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <p class="h1">你有一份</p>
    <p class="h1">刮刮乐</p>
    <p class="h1">请查收</p>
    <div class="img">
      <img src="../assets/index.png" alt />
    </div>
    <!-- to=" name: "search", params: { opendid: opendid }" -->
    <router-link to=" name: 'search', params: { opendid: opendid }}"></router-link>
    <router-link to="/search">
      <div class="check">刮成绩</div>
    </router-link>
    <router-link to="/marklist">
      <div class="result">黑名单</div>
    </router-link>
  </div>
</template>
<script>
//import Axios from "axios";

export default {
  name: "index",
  data() {
    return {
      openid: "openid",
      errorstatus: "error1"
    };
  },
  mounted() {
    //测试错误页
    //this.$router.push({ name: "error", params: { error: this.errorstatus } });
  },
  methods: {
    /* getOpenid: function() {
      let that = this;
      let url = window.location.search;
      let params = new URLSearchParams(url);
      let code = params.get("code");
      let getOpenid = Axios({
        url: "https://api.weixin.qq.com/sns/oauth2/access_token",
        method: "get",
        headers: { "content-type": "application/x-www-form-urlencoded" },
        params: {
          //公众号id
          appid: appid,
          //公众号secret                    
          secret: secret,
          code: that.code,
          grant_type: "authorization_code"
        }
      }).then(function(response) {
        that.openid = response.openid;
      });
    } */
  }
};
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  .h1 {
    font-size: 80px;
    width: 40%;
  }
  .img {
    width: 80%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .check {
    width: 500px;
    font-size: 60px;
    background: #09bb07;
    margin: 50px;
  }
  .result {
    width: 500px;
    font-size: 60px;
    background: #dfdfdf;
    margin: 50px;
  }
}
</style>