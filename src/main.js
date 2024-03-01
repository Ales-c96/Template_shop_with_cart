import { createApp } from "vue";
import { createPinia } from "pinia";
import { createVuetify } from "vuetify";
import router from "./router";

import "vuetify/styles";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import "./style.css";
import "./main.css";

import App from "./App.vue";

const vuetify = createVuetify({
    components,
    directives
})

const pinia = createPinia();
const app = createApp(App);

app.use(vuetify);
app.use(router);
app.use(pinia);
app.mount("#app");
