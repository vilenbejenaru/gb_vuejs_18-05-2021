<template>
    <div id="app">
        <div class="wrapper">
            <header>
                <router-link to="/dashboard"> Dashboard R </router-link>/
                <router-link to="/about"> About R </router-link>/
                <router-link to="/page404"> 404 R </router-link> /
            </header>
            <h1 class="title">My personal Cost</h1>
            <h2 class="subtitle">Total: {{ getFullPaymentValue }}</h2>
            <main>
                <router-view />
            </main>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    name: 'App',

    data() {
        return {
            page: '',
        };
    },

    mounted() {
        this.$store.dispatch('fetchData');
    },
    methods: {
        ...mapMutations(['setPaymentListData']),
        emitAction() {
            this.addBtnIsShown = false;
        },
        addPayment(data) {
            this.$store.commit('addDataToPaymentList', data);
        },
        goTopage(pageName) {
            this.$router.push({
                name: pageName,
            });
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

</style>
