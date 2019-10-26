<template>
  <div class="container">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <div class="boxctn" v-for="item in allmark" :key="item.index">
      <searchbox :markmsg="item"></searchbox>
    </div>
  </div>
</template>
<script>
import searchbox from "../components/searchbox.vue";
import vue from "vue";
import Router from "vue-router";
//import Axios from "axios";
vue.use(Router);
export default {
  name: "search",
  components: {
    searchbox
  },
  mounted() {
    //getMark();
  },
  data() {
    return {
      allmark: [
        { subject: "大学物理(A)", mark: "60" },
        { subject: "电路", mark: "60" }
      ]
    };
  },
  props: {
    openid: String
  },
  methods: {
    /* getMark: function() {
      let that = this;
      let getmark = Axios({
        url: "",
        method: "",
        headers: { "content-type": "application/x-www-form-urlencoded" },
        params: {
          openid: that.openid
        }
      });
      getmark.then(function(response) {
        let f = true;
        let item;
        for (let i of response.marklist) {
          for (let j=0;j< localStorage.length;j++) {
            let key = localStorage.key(j);
            let value = localStorage.getItem(j);
            if (i.subject == key) {
              f = false;
            } else {
              item = i;
            }
          }
        }
        if (f) {
          that.allmark.push(item);
        }
      });
      getmark.catch(function(error) {
        that.$router.push({ name: "error", params: { error: errorstatus } });
      }); 
    }*/
  }
};
</script>
<style lang="scss" scope="this api replaced by slot-scope in 2.5.0+">
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  .boxctn {
    width: 100%;
    //background: #bdbcbb;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>