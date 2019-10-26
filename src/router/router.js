import vue from "vue";
import Router from "vue-router";
const index = () => import("../components/index.vue");
const search = () => import("../components/search.vue");
const error = () => import("../components/error.vue");
const marklist = () => import("../components/marklist");
vue.use(Router);
const router = new Router({
  //mode: "history",
  routes: [
    {
      path: "/",
      redirect: { name: "index" }
    },
    {
      path: "/index",
      name: "index",
      component: index
    },
    {
      path: "/search",
      name: "search",
      component: search
    },
    {
      path: "/error",
      name: "error",
      component: error
    },
    {
      path: "/marklist",
      name: "marklist",
      component: marklist
    }
  ]
});

/*export default {
  router
};*/
export default router;
