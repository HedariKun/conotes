import Vue from "vue"
import 'regenerator-runtime/runtime'

import Home from "./home.vue"
import router from "./router"
import store from "./store"

const pages = require("./pages/**/*.mdm")

Vue.prototype.$pages = pages

new Vue({
	router,
	store,
	render: (createElement) => createElement(Home)
}
).$mount("#app")
