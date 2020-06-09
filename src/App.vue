<template>
  <div id="app">
    <img class="vue-logo" alt="Vue logo" src="./assets/logo.png" />
    <Tabs />
    <!-- Render modal if steps one and two are completed-->
    <ModalBody v-if="this.stepOneCompleted && this.stepTwoCompleted" />
  </div>
</template>

<script>
import Tabs from "./components/Tabs.vue";
import ModalBody from "./components/Modal/ModalBody";
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    Tabs,
    ModalBody
  },
  computed: {
    ...mapGetters(["stepOneCompleted", "stepTwoCompleted"])
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

@media only screen and (max-width: 767px) {
  .vue-logo {
    display: none;
  }
}
</style>
