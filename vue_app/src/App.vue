<template>
  <div id="app">
    <v-app>
      <v-main>
        <v-app-bar flat color="blue">
          <v-btn plain :ripple="false" to="/dashboard"> Dashboard R</v-btn>/
          <v-btn plain :ripple="false" to="/about"> About R </v-btn>/
          <v-btn plain :ripple="false" to="/page404">
            404 R
          </v-btn>
          /
          <v-btn plain :ripple="false" to="/payment">
            New payment
          </v-btn>
          /
          <v-btn plain :ripple="false" to="/calc">
            Calculator
          </v-btn>
          /
        </v-app-bar>
        <router-view />
      </v-main>
    </v-app>
    <transition name="fade">
      <ModalWindow
        v-if="modalWindow"
        :name="modalWindow"
        :header-name="modalHeader"
        :modal-settings="modalSettings"
        @close="onHide"
      />
    </transition>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "App",
  components: {
    ModalWindow: () => import("./components/ModalWindow.vue")
  },
  data() {
    return {
      page: "",
      modalWindow: "",
      modalHeader: "",
      modalSettings: {}
    };
  },
  mounted() {
    this.$modal.EventBus.$on("show", this.onShown);
    this.$modal.EventBus.$on("hide", this.onHide);
    this.$store.dispatch("fetchData");
  },
  beforeDestroy() {
    this.$modal.EventBus.$off("show", this.onShown);
    this.$modal.EventBus.$off("hide", this.onHide);
  },
  methods: {
    ...mapMutations(["setPaymentListData"]),
    emitAction() {
      this.addBtnIsShown = false;
    },
    addPayment(data) {
      this.$store.commit("addDataToPaymentList", data);
    },
    goTopage(pageName) {
      this.$router.push({
        name: pageName
      });
    },
    onHide() {
      this.ModalWindoW = "";
      this.modalHeader = "";
      this.modalSettings = {};
    },
    onShown(data) {
      this.ModalWindoW = data.name;
      this.modalHeader = data.headerName;
      this.modalSettings = data.modalSettings;
    }
  }
};
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
