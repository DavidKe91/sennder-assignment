<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Tabs testProp="Tabs test" />
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
</style>
