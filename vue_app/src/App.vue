<template>
	<div id="app">
		<div class="wrapper">
			<header>
				<h1 class="title">My personal Cost</h1>
				<h2 class="subtitle">Financial state</h2>
			</header>
			<main>
				<add-payment
					v-if="addBtnIsShown"
					@cancelEmit="emitAction"
					@saveEmit="addPayment"
				/>
				<button
					class="add-btn"
					@click="addBtnIsShown = !addBtnIsShown"
					v-if="!addBtnIsShown"
				>
					Add new cost +
				</button>
				<payments-display :items="paymentsList" />
				<pagination :selectList="paymentsList" />
			</main>
		</div>
	</div>
</template>

<script>
	import AddPayment from './components/addPayment.vue';
	import Pagination from './components/Pagination.vue';
	import PaymentsDisplay from './components/PaymentsDisplay.vue';

	export default {
		name: 'App',
		components: {
			PaymentsDisplay,
			AddPayment,
			Pagination,
		},

		data() {
			return {
				paymentsList: [],
				addBtnIsShown: false,
			};
		},
		methods: {
			addPayment(data) {
				this.paymentsList.push(data);
			},
			emitAction() {
				this.addBtnIsShown = false; // скрывает инпуты через емит при на жатии на дочернюю кнопку; метод указывается при получении компонента в темплейт родителя
			},
			fetchData() {
				return [
					{
						date: '22.12.2020',
						category: 'Food',
						value: '123',
					},
					{
						date: '12.12.2020',
						category: 'Transport',
						value: '13',
					},
					{
						date: '22.12.2020',
						category: 'Housing',
						value: '12',
					},
					{
						date: '22.12.2020',
						category: 'Health',
						value: '143',
					},
					{
						date: '22.12.2020',
						category: 'Cloth',
						value: '34',
					},
					{
						date: '22.12.2020',
						category: 'House',
						value: '11',
					},
				];
			},
		},
		created() {
			this.paymentsList = this.fetchData();
		},
	};
</script>

<style lang="scss" scoped>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
	.add-btn {
		width: 120px;
		height: 30px;
		background-color: #3bba9f;
		border: 1px solid #3f95cd;
		border-radius: 3px;
	}
</style>
