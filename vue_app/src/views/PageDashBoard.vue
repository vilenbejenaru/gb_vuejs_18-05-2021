<template>
  <div>
    <h2 class="subtitle">Total: {{ getFullPaymentValue }}</h2>
    <h1>DashBoard</h1>

    <button @click="openModal" class="add-btn">New payment</button>
    <payments-display :items="getPaymentList" />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

import PaymentsDisplay from "../components/PaymentsDisplay.vue";
export default {
  name: "PageDashboard",
  components: {
    PaymentsDisplay
  },
  data() {
    return {
      isModalShow: false,
      settings: {}
    };
  },
  computed: {
    ...mapGetters(["getPaymentList", "getFullPaymentValue"])
  },
  methods: {
    ...mapMutations(["setPaymentListData"]),
    actionEmit() {
      this.addBtnIsShown = false;
    },
    addPayment(data) {
      this.$store.commit("addDataToPaymentList", data);
    },
    goTopage(pageName) {
      this.$router.push({
        name: pageName
      });
    }
  },
  openAuth() {
    this.isModalShow = true;
    this.settings = { name: "auth", headerName: "Auth User" };
  },
  openModal() {
    this.$modal.show("AddPayment", "add Payment");
  }
};
</script>

<style lang="scss" scoped>
.add-btn {
  width: 120px;
  height: 30px;
  background-color: #3bba9f;
  border: 1px solid #3f95cd;
  border-radius: 3px;
}
</style>
