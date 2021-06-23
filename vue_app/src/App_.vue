<template>
  <div id="app">
    <v-app>
      <v-main>
        <v-app-bar color="blue">
          <v-btn to="/dashboard"> Dashboard R </v-btn>/
          <v-btn to="/about"> About R </v-btn>/
          <v-btn to="/page404">
            404 R
          </v-btn>
          /
          <v-btn to="/payment">
            New payment
          </v-btn>
          /
          <v-btn to="/calc">
            Calculator
          </v-btn>
          /
        </v-app-bar>
        <v-btn color="success">text</v-btn>
      </v-main>
    </v-app>

    <div class="wrapper">
      <!-- <header>
        <router-link to="/dashboard"> Dashboard R </router-link>/
        <router-link to="/about"> About R </router-link>/
        <router-link to="/page404">
          404 R
        </router-link>
        /
        <router-link to="/payment">
          New payment
        </router-link>
        /
        <router-link to="/calc">
          Calculator
        </router-link>
        /
      </header> -->
      <h1 class="title">
        My personal Cost
      </h1>

      <main>
        <router-view />
      </main>
    </div>
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
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

:global(.fade-enter-active),
:global(.fade-leave-active) {
  transition: opacity 0.6s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
