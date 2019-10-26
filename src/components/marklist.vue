<template>
  <div class="container">
    <div class="img">
      <img src="../assets/marklist.png" alt />
    </div>
    <div class="boxctn" v-for="item in marklist" :key="item.index">
      <div class="subject">{{item.subject}}</div>
      <div class="markbox">{{item.mark}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "marklist",
  data() {
    return {
      marklist: []
    };
  },
  mounted() {
    this.getmarklist();
    window.console.log(this.marklist);
  },
  beforeDestroy() {
    this.marklist = [];
  },
  methods: {
    getmarklist: function() {
      let that = this;
      let item;
      for (let i = 1; i < window.localStorage.length; i++) {
        let key = window.localStorage.key(i);
        let value = window.localStorage.getItem(key);
        item = {
          subject: key,
          mark: value,
          index: i
        };
        window.console.log(item);
        that.marklist.push(item);
      }
    }
  }
};
</script>

<style lang="scss" scope="this api replaced by slot-scope in 2.5.0+">
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .boxctn {
    width: 70%;
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

    .markbox {
      margin-top: 26px;
      width: 100%;

      font-size: 300px;
      height: 400px;
      background: #ffffff;
    }
  }
}
</style>