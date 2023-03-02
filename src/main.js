import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "@babel/polyfill";

Vue.config.productionTip = false;

Vue.mixin({
  data() {
    return {
      londonBridge: false,
    };
  },
  computed: {
    colors: function () {
      if (this.londonBridge) {
        return {
          appBar: "grey darken-5",
          appBarToolbarTitle:
            "text-h4 font-weight-bold black--text text--darken-4",
          appBarIcons: "black",
          logoBg: "grey darken-5",
          logoStyle: "filter: grayscale(100%)",
          logoTextTop: "black--text",
          logoTextBottom: "black--text",
          footer: "grey darken-5",
          footerLink: "black--text",
          bannerColor: "grey darken-5",
          bannerText: "black--text",
        };
      }
      return {
        appBar: "blue lighten-5",
        appBarToolbarTitle:
          "text-h4 font-weight-bold blue--text text--darken-4",
        appBarIcons: "blue darken-4",
        logoBg: "blue lighten-5",
        logoStyle: "",
        logoTextTop: "blue--text text--darken-4",
        logoTextBottom: "indigo--text text--darken-4",
        footer: "blue lighten-5",
        footerLink: "",
        bannerColor: "warning",
        bannerText: "white--text",
      };
    },
  },
});

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
