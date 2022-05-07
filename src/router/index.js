import Vue from "vue";
// import Router from "vue-router";
import Router from "../myRouter/index";
// console.log(Router,'Router')
Vue.use(Router);
console.log(Router, "Router1");
let routes = [];
const routerContext = require.context("./", true, /index\.js$/);
routerContext.keys().forEach(route => {
  if (route.startsWith("./index")) return;
  const routerModule = routerContext(route);
  routes = [...routes, ...(routerModule.default || routerModule)];
});

const router = new Router({
  mode: "hash",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import(/* webpackChunkName: "index" */ "@/views/Home")
      // meta: { title: "首页" }
    },
    ...routes
  ]
});

// router.beforeEach((to, froms, next) => {
//   if (to.meta.title) {
//     document.title = to.meta.title;
//   }

//   next();
// });

export default router;
