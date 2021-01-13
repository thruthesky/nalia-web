import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import { AppService } from "@/vue-v3-admin/services/app.service";
/// Create AppService instance only one time.
const appService = new AppService();
createApp(App)
  .mixin({
    data() {
      return {
        app: appService /// Don't instantiate AppService() here.
      };
    }
  })
  .use(store)
  .use(router)
  .mount("#app");
