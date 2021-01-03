import Vue from "vue"
import 'regenerator-runtime/runtime'

import Home from "./home.vue"
import router from "./router"

const pages = require("./pages/**/*.mdm")

Vue.prototype.$pages = pages

new Vue({
	router,
	render: (createElement) => createElement(Home)
}
).$mount("#app")
