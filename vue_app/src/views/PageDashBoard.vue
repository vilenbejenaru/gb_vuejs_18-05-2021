<template>
  <div>
    <h2 class="subtitle">Total: {{ getFullPaymentValue }}</h2>
    <h1>DashBoard</h1>

    <button class="add-btn" @click="isModalShow = true">
      New payment
    </button>

    <transition name="fade" appear>
      <div
        class="modal-overlay"
        v-if="isModalShow"
        @click="isModalShow = false"
      ></div>
    </transition>
    <transition name="slide" appear>
      <AddPayment
        class="modal"
        v-if="isModalShow"
        @cancelEmit="actionEmit"
        @addNewPayment="addPayment"
        @click="isModalShow = false"
      />
    </transition>

    <payments-display :items="getPaymentList" />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

import AddPayment from "../components/AddPayment";
import PaymentsDisplay from "../components/PaymentsDisplay.vue";
export default {
  name: "PageDashboard",
  components: {
    AddPayment,
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
.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 98;
  background-color: rgba(0, 0, 0, 0.3);
  height: 100vh;
}
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
  height: 160px;
  max-width: 400px;
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
}
</style>
