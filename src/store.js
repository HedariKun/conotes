import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		pages: []
	},
	mutations: {
		updatePages(state, data) {
			state.pages = data
		}
	}
})

