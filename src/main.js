import { createApp } from "vue";
import App from "./App.vue";

import VueHighlightJS from 'vue3-highlightjs'
import 'highlight.js/styles/monokai.css'
// import 'highlight.js/styles/stackoverflow-dark.css'
// import 'highlight.js/styles/monokai.css'
// import 'highlight.js/styles/night-owl.css'

createApp(App)
  .use(VueHighlightJS)
  .mount("#app")
