<template>
  <div class="container">
    <p class="h1">{{errormsg}}</p>
    <div class="img">
      <img :src="imgsrc" alt />
    </div>
    <div class="again" @click="again">{{tryagain}}</div>
  </div>
</template>
<script>
import imgsrc1 from "../assets/error1.png";
import imgsrc2 from "../assets/error2.png";
import imgsrc3 from "../assets/error3.png";
import imgsrc4 from "../assets/error4.png";
import imgsrc5 from "../assets/error5.png";
export default {
  name: "error",
  data() {
    return {
      errormsg: "errormsg",
      imgsrc: "imgsrc",
      tryagain: "再试一次"
    };
  },
  mounted() {
    this.getError();
  },
  methods: {
    again: function() {
      if (this.imgsrc == imgsrc2) {
        //跳转绑定页
        this.$router.push();
      } else {
        this.$router.push({ name: "index" });
      }
    },
    getError: function() {
      let that = this;
      let error = that.$route.params.error;
      switch (error) {
        case "error1":
          that.errormsg = "成绩还没有出来呢";
          that.imgsrc = imgsrc1;
          break;
        case "error2":
          that.errormsg = "不好意思， 您的账号未绑定";
          that.imgsrc = imgsrc2;
          that.tryagain = "去绑定";
          break;
        case "error3":
          that.errormsg = "程序员正在努力修复中......";
          that.imgsrc = imgsrc3;
          break;
        case "error4":
          that.errormsg = "教务系统好像出错了";
          that.imgsrc = imgsrc4;
          break;
        case "error5":
          that.errormsg = "emmm，你还没有评教哦";
          that.imgsrc = imgsrc5;
          break;

        default:
          break;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  .again {
    width: 500px;
    font-size: 60px;
    background: #09bb07;
    margin: 50px;
  }
}
</style>