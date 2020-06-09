<template>
  <!-- The modal will only open when the checkForm function returns stepOne and stepTwo as true -->
  <div
    class="modal"
    :class="{opened: this.$store.state.stepOneCompleted && this.$store.state.stepTwoCompleted}"
  >
    <div class="modal-dialog">
      <div class="modal-header">
        <Temperature />
      </div>
      <div class="modal-body">
        <!-- A basic comparison is made between both entered values and returns Success, Equal or Failure depending on the result -->
        <h2 class="modal-title" v-if="this.employerMax > this.employeeMin">Success!</h2>
        <h2
          class="modal-title"
          v-else-if="this.employerMax == this.employeeMin"
        >Great Minds Think Alike!</h2>
        <h2 class="modal-title" v-else>Failure!</h2>
        <p>Maximum offer was: &euro; {{this.employerMax}}</p>
        <p>Minimum expected salary was: &euro; {{this.employeeMin}}</p>
      </div>
      <!-- Upon completing the form, the user has the option to revert back to the beginning using the resetState function, which returns all state properties to null or 0 -->
      <div class="modal-footer">
        <button v-on:click="resetState()">Reset</button>
      </div>
    </div>
  </div>
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
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
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
@media only screen and (max-width: 767px) {
  .modal-dialog {
    width: 90%;
  }
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