<template>
    <div id="app">
        <div class="wrapper">
            <header>
                <a href="/dashboard">Dashboard</a>/ <a href="/about">About</a>/
                <a href="/unknown">404</a>
                <div class="pages">
                    <page-dash-board v-if="page === 'dashboard'" />
                    <page-about v-else-if="page == 'about'" />
                    <page-404 v-else />
                </div>
            </header>
            <h1 class="title">My personal Cost</h1>
            <h2 class="subtitle">Total: {{ getFullPaymentValue }}</h2>

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
                <payments-display :items="getPaymentList" />
            </main>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
import PaymentsDisplay from './components/PaymentsDisplay.vue';
import AddPayment from './components/addPayment.vue';
import PageDashBoard from './views/PageDashBoard.vue';
import Page404 from './views/Page404.vue';
import PageAbout from './views/PageAbout.vue';

export default {
    name: 'App',
    components: {
        PaymentsDisplay,
        AddPayment,
        PageDashBoard,
        Page404,
        PageAbout,
    },

    data() {
        return {
            addBtnIsShown: false,
            page: '',
        };
    },
    actions: {
        ...mapActions(['fetchData']),
    },
    computed: {
        ...mapGetters(['getPaymentList', 'getFullPaymentValue']),
    },
    created() {
        // this.setPaymentListData(this.fetchData())
    },
    mounted() {
        this.$store.dispatch('fetchData');
        // this.setPage();
        // window.addEventListener('hashchange', () => {
        // 	this.setPage();
        // });
        const links = document.querySelectorAll('a');
        links.forEach((l) => {
            l.addEventListener('click', (event) => {
                event.preventDefault();
                history.pushState({}, '', l.href);
                this.setPage();
            });
        });
        window.addEventListener('popstate', this.setPage);
    },
    methods: {
        ...mapMutations(['setPaymentListData']),
        emitAction() {
            this.addBtnIsShown = false;
        },
        addPayment(data) {
            this.$store.commit('addDataToPaymentList', data);
        },
        setPage() {
            this.page = location.pathname.slice(1);
        },
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
