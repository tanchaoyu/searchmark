<template>
  <div class="container">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <div class="addlistbtn" @click="addlist">
      <img src="../assets/addlist.png" alt />
    </div>
    <div class="boxctn">
      <div class="subject">{{markmsg.subject}}</div>
      <div class="searchbox" id="searchbox">
        <canvas
          id="canvas"
          ref="canvas"
          width="686px"
          height="400px"
          @click="click"
          @touchmove="move2"
          @mousemove="move"
          @
        ></canvas>
      </div>
      <div class="resultbox">{{markmsg.mark}}</div>
    </div>
  </div>
</template>
<script>
import image from "../assets/cover1.png";
//import axios from "axios";
export default {
  name: "searchbox",
  mounted() {
    this.create();
    this.msg = this.markmsg;
    window.console.log(this.markmsg);
  },
  data() {
    return {
      msg: {}
    };
  },
  props: {
    markmsg: Object
  },
  methods: {
    create: function() {
      let img = new Image(300, 100);
      window.console.log(image);
      img.src = image;
      window.console.log(img);
      let canvas = this.$refs.canvas.getContext("2d");
      window.console.log(canvas);
      img.onload = function() {
        canvas.drawImage(img, 0, 0, 1075, 400);
        canvas.globalCompositeOperation = "destination-out"; // 橡皮擦
      };
      window.console.log(canvas);
    },
    click: function(e) {
      this.move(e);
    },
    move: function(e) {
      window.console.log(e);
      let canvas = e.target.getContext("2d");
      let startX = e.offsetX;
      let startY = e.offsetY;
      window.console.log(startX);
      window.console.log(startY);
      canvas.beginPath();
      //canvas.moveTo(startX, startY);
      canvas.arc(startX, startY, 20, 0, Math.PI * 2, false);
      canvas.fill();
    },
    move2: function(e) {
      window.console.log(e);
      let canvas = e.target.getContext("2d");
      let clientX = e.targetTouches[0].clientX;
      let clientY = e.targetTouches[0].clientY;
      let offsetTop = e.targetTouches[0].target.offsetTop;
      let offsetLeft = e.targetTouches[0].target.offsetLeft;
      window.console.log(clientX);
      window.console.log(clientY);
      window.console.log(offsetTop);
      window.console.log(offsetLeft);

      canvas.beginPath();
      //canvas.moveTo(startX, startY);
      canvas.arc(
        clientX - offsetLeft,
        clientY - offsetTop,
        20,
        0,
        Math.PI * 2,
        false
      );
      canvas.fill();
    },
    addlist: function() {
      let f = window.confirm("确定加入黑名单？");
      if (f) {
        localStorage.setItem(this.markmsg.subject, this.markmsg.mark);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .addlistbtn {
    width: 70px;
    height: 70px;
    align-self: flex-end;
    position: relative;
    top: 90px;
    left: 50px;

    img {
      width: 100%;
      height: 100%;
    }
  }
  .boxctn {
    width: 100%;
    margin: 50px;
    padding-top: 0;
    border-image-source: url("../assets/border1.png");
    border-image-slice: 10 10 10 10;
    border-style: solid;
    border-width: 20px;
    border-image-width: 20px;
    //background: #bdbcbb;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .subject {
      font-size: 40px;
    }
    .searchbox {
      width: 100%;
      #canvas {
        width: 100%;
        height: 400px;
        z-index: 1;
      }
    }
    .resultbox {
      position: absolute;
      margin-top: 26px;
      width: 70%;
      z-index: -1;
      font-size: 300px;
      height: 400px;
      background: #ffffff;
    }
  }
}
</style>