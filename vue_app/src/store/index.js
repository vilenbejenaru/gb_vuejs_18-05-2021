import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		paymentsList: [],
        obj: {
            id: '1212',
            value:' test'
        },
	},
	mutations: {
		setPaymentsListData(state, payload) {
			state.paymentsList = payload
		},

		addPayment (state, payload) {
            state.paymentsList.push(payload)
        }
	},
	getters: {

	},
	actions: {

	},
});
