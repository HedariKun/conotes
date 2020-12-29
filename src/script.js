import Vue from "vue"
import Home from "./home.vue"

const app = new Vue({
	render: (createElement) => createElement(Home)
}
).$mount("#app")
