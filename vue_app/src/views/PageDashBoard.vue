<template>
  <v-container>
    <v-row>
      <v-col  >
        <div class="text-xl-h3 text-sm-h4 text-xs-h6">My personal cost</div>
        <v-btn color="blue">Add new payment <v-icon>mdi-plus</v-icon></v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols=6>
        <v-data-table
          :headers="headers"
          :items="getPaymentList"
          :items-per-page="10"
          :page.sync="page"
          class="elevation-1"
              hide-default-footer
              @page-count="pageCount = $event"
        ></v-data-table>
        <v-pagination
        v-model="page"
        :length="pageCount"
      ></v-pagination>
      </v-col>
    </v-row>
    <h2 class="subtitle">Total: {{ getFullPaymentValue }}</h2>
    <h1>DashBoard</h1>
    <button-modal/>

    <!-- <button class="add-btn" @click="isModalShow = true">
      New payment
    </button> -->

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
  </v-container>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

import AddPayment from "../components/AddPayment";
import PaymentsDisplay from "../components/PaymentsDisplay.vue";
import ButtonModal from "../components/ButtonModal.vue";
export default {
  name: "PageDashboard",
  components: {
    AddPayment,
    PaymentsDisplay,
    ButtonModal
  },
  data() {
    return {
       page: 1,
        pageCount: 0,
      isModalShow: false,
      settings: {},
      headers: [
        { text: "Nr.", value: "value", sortable: true },
        {
          text: "Date",
          align: "start",
          sortable: false,
          value: "date"
        },
        { text: "Category", value: "category", sortable: true },
        { text: "Value", value: "value", sortable: true }
      ]
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
