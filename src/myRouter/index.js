let Vue;

class Router {
  constructor(options) {
    console.log(options, "optoins");
    this.current = "/";
    Vue.util.defineReactive(this, "current", "/");
    this.routes = options.routes;
    this.mode = options.mode || "hash";
    this.init();
  }
  init() {
    if (this.mode === "hash") {
      // console.log(window.location.hash, "hash");
      window.addEventListener("load", () => {
        // console.log(this, location.hash.slice(1), "this");
        this.current = location.hash.slice(1);
      });
      window.addEventListener("hashchange", () => {
        // console.log(location.hash, "2");
        this.current = location.hash.slice(1);
      });
    }
  }
}
Router.install = function(_Vue) {
  Vue = _Vue;
  //给调用的组件添加一个router
  Vue.mixin({
    beforeCreate() {
      if (this.$options.router) {
        // console.log(this.$options, "this12");
        Vue.prototype.$router = this.$options.router;
      }
    }
  });
  //router-link
  Vue.component("router-link", {
    props: {
      to: {
        type: String,
        require: true
      }
    },
    render(h) {
      return h(
        "a",
        {
          attr: {
            href: "#" + this.to
          }
        },
        this.$slots.default
      );
    }
  });
  //router-view
  Vue.component("router-view", {
    render(h) {
      console.log(this.$router, "routuer");
      let current = this.$router.current;
      let routes = this.$router.routes;
      console.log(routes, current, "123");
      let module = routes.find(item => {
        return current === item.path;
      });
      // console.log(module, "module");
      return h(module.component);
    }
  });
};
export default Router;
