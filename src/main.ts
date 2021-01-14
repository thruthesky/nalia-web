import { createApp } from "vue";
import AppView from "./AppView.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import { Api } from "./vue-v3-admin/services/api.service";
import { App } from "./app.service";

Api.init();
createApp(AppView)
  .mixin({
    data() {
      return {
        api: Api,
        app: App
      };
    }
  })
  .use(store)
  .use(router)
  .mount("#app");
