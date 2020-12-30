import VueRouter from "vue-router"
import Vue from "vue"
import index from "./pages/index.vue"

Vue.use(VueRouter)

export default new VueRouter({
	routes: [
		{ path: "*", component: index}
	]
})
