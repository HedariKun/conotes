import Vue from "vue"
import Home from "./home.vue"

import router from "./router"

const pages = require("./pages/**/*.mdm")
console.log(pages)
new Vue({
	router,
	render: (createElement) => createElement(Home)
}
).$mount("#app")
