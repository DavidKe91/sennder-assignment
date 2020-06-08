<template>
  <!-- Modal -->
  <div
    class="modal"
    :class="{opened: this.$store.state.stepOneCompleted && this.$store.state.stepTwoCompleted}"
  >
    <div class="modal-dialog">
      <div class="modal-header">
        <Temperature />
      </div>
      <div class="modal-body">
        <h1 v-if="this.employerMax > this.employeeMin">Success!</h1>
        <h1 v-else-if="this.employerMax == this.employeeMin">Great Minds Think Alike!</h1>
        <h1 v-else>Failure!</h1>
        <p>Maximum offer was: &euro; {{this.employerMax}}</p>
        <p>Minimum expected salary was: &euro; {{this.employeeMin}}</p>
      </div>
      <div class="modal-footer">
        <button v-on:click="resetState()">Reset</button>
      </div>
    </div>
  </div>
  <!-- /Modal -->
</template>

<style scoped>
.modal:before {
  content: "";
  display: none;
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
}
.opened:before {
  display: block;
}
.opened .modal-dialog {
  -webkit-transform: translate(0, 0);
  -ms-transform: translate(0, 0);
  transform: translate(0, 0);
  top: 20%;
}
.modal-dialog {
  background: #fefefe;
  border: #333333 solid 0px;
  border-radius: 5px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  position: fixed;
  left: 0px;
  right: 0px;
  z-index: 10;
  width: 500px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  transform: translate(0, -500%);
  transition: transform 0.3s ease-out;
}
.modal-body {
  padding: 20px;
}
.modal-body input {
  width: 200px;
  padding: 8px;
  border: 1px solid #ddd;
  color: #888;
  outline: 0;
  font-size: 14px;
  font-weight: bold;
}
.modal-header,
.modal-footer {
  padding: 10px 20px;
}
.modal-header {
  border-bottom: #eeeeee solid 1px;
  background-color: #41b883;
  color: #ffffff;
}
.weather img {
  max-width: 55px;
}
.weather p {
  margin-top: 0px;
}
.modal-header h2 {
  font-size: 20px;
}
.modal-footer {
  padding: 10px 20px;
  border-top: #eeeeee solid 1px;
}
.modal-footer button {
  background: #41b883;
  border: #22885a solid 0px;
  border-radius: 3px;
  color: #fff;
  display: inline-block;
  font-size: 14px;
  padding: 8px 15px;
  text-decoration: none;
  text-align: center;
  min-width: 90px;
  margin: 16px 5px;
  position: relative;
  transition: color 0.1s ease;
}
</style>

<script>
import { mapGetters } from "vuex";
import Temperature from "./Temperature";
export default {
  name: "Modal",
  components: {
    Temperature
  },
  data() {
    return {
      success: null,
      equal: null
    };
  },
  methods: {
    resetState: function() {
      this.$store.commit("resetState");
    }
  },
  computed: {
    ...mapGetters(["currentTab", "employerMax", "employeeMin"])
  }
};
</script>