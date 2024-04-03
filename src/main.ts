import { createApp } from "vue"
import "./style.css"
import App from "./App.vue"
import "normalize.css/normalize.css"
import router from "./router/index"

createApp(App).use(router).mount("#app")
