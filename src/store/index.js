import Vue from "vue";
import Vuex from "vuex";
import axios from "@/plugins/axios"
import VueAxios from "vue-axios"

Vue.use(Vuex, VueAxios, axios);

export default new Vuex.Store({
	state: {
		plans: [
			{
				id: '1',
				image: 'https://s22.postimg.cc/8mv5gn7w1/paper-plane.png',
				name: 'Bronze',
				price: 100,
				features: [
					'Something goes here',
					'Something goes here'
				]
			},
			{
				id: '2',
				image: 'https://s28.postimg.cc/ju5bnc3x9/plane.png',
				name: 'Silver',
				price: 300,
				features: [
					'Something goes here',
					'Something goes here'
				]
			},
			{
				id: '3',
				image: 'https://s21.postimg.cc/tpm0cge4n/space-ship.png',
				name: 'Gold',
				price: 500,
				features: [
					'Something goes here',
					'Something goes here'
				]
			}
		]
	},
	mutations: {
		SET_PLANS(state, payload) {
			state.plans = payload.plans
		}
	},
	getters: {
		plans: state => state.plans,
	},
	actions: {
		fetchPlans(context) {
			return new Promise((resolve, reject) => {
				axios.get('/plans')
					.then(response => {
						context.commit('SET_PLANS', {
							plans: response.data.plans
						})

						resolve(response)
					})
					.catch(error => {
						reject(error)
					})
			})
		},
		subscribe(context, plan) {
			return new Promise((resolve, reject) => {
				axios.post('/plans', {
					id: plan.id
				})
					.then(response => {
						resolve(response)
					})
					.catch(error => {
						reject(error)
					})
			})
		},
		testSubscribe(context, plan) {
			return new Promise(resolve => {
				setTimeout(() => {
					resolve(plan)
				}, 3000)
			})
		}
	},
	modules: {}
});
