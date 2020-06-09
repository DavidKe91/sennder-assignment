<template>
  <div>
    <!-- Using the checkForm function, any errors detected will be pushed to the errors array and popped off when they have been resolved -->
    <div v-if="errors.length">
      <ul class="errors">
        <li v-bind:key="error" v-for="error in errors">{{error}}</li>
      </ul>
    </div>
    <!-- Dynamically shows the relevant title, tab and v-model depending on the current tab value. I wanted to pass relevant via props, but v-model can't be passed as a prop using Vuex -->
    <div v-if="currentTab == 0">
      <h2>Employer Maximum</h2>
      <div>
        <span class="input-euro-symbol">
          <input
            id="employerMaxID"
            type="text"
            v-model="employerMax"
            placeholder="Please Enter Maximum Salary"
          />
        </span>
        <button class="employerSubmit" v-on:click="checkForm(employerMax)">Submit</button>
      </div>
    </div>
    <div v-else>
      <h2>Employee Maximum</h2>
      <div>
        <span class="input-euro-symbol">
          <input
            id="employeeMinID"
            type="text"
            v-model="employeeMin"
            placeholder="Please Enter Minimum Salary"
          />
        </span>
        <button class="employeeSubmit" v-on:click="checkForm(employeeMin)">Submit</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hidden {
  display: none;
}
.active {
  display: block;
}
button {
  display: block;
  margin: 20px auto;
  background-color: #41b883;
  -webkit-appearance: none;
  border: none;
  font-size: 16px;
  min-width: 220px;
  color: #ffffff;
  padding: 10px 15px;
}
.input-euro-symbol {
  position: relative;
}
.input-euro-symbol input {
  padding-left: 15px;
  min-width: 200px;
  padding: 5px 10px 5px 25px;
  box-shadow: none;
  border: 1px solid lightgrey;
  border-radius: 5px;
}
.input-euro-symbol:before {
  content: "€";
  position: absolute;
  left: 8px;
  color: #41b883;
  top: 1px;
}
.errors {
  background-color: hsla(0, 87%, 54%, 0.7);
  margin: 30px auto 0px;
  color: #ffffff;
  max-width: 200px;
  text-align: center;
  padding: 5px 10px;
  list-style: none;
}
</style>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Tab",
  data: function() {
    return {
      errors: []
    };
  },
  computed: {
    ...mapGetters(["currentTab"]),
    employerMax: {
      get() {
        return this.$store.state.employerMax;
      },
      set(value) {
        this.checkNumbers(value, "updateEmployerMax");
      }
    },
    employeeMin: {
      get() {
        return this.$store.state.employeeMin;
      },
      set(value) {
        this.checkNumbers(value, "updateEmployeeMin");
      }
    }
  },
  methods: {
    // checkNumbers pre-validates the form input before submission. This is done so that non numeric characters cannot pass into the parseInt function later on for comparing values
    checkNumbers: function(inputValue, mutation) {
      let matchNum = /^\d+$/.test(inputValue);
      if (!matchNum) {
        this.errors.pop();
        this.errors.push("Please use positive whole numbers only");
        return false;
      } else {
        this.$store.commit(mutation, inputValue);
      }
    },
    // checkForm is used when submit is clicked. It offers validation to protect against empty input fields being submitted.
    checkForm: function(inputValue) {
      if (!inputValue) {
        this.errors.push("Input required");
        return false;
      }
      if (this.currentTab == 0) {
        inputValue == this.employerMax;
        this.$store.commit("changeTab", 1);
        this.errors = [];
        this.$store.state.stepOneCompleted = true;
        return true;
      } else {
        inputValue == this.employeeMin;
        this.errors = [];
        this.$store.commit("changeTab", 0);
        this.$store.state.stepTwoCompleted = true;
        return true;
      }
    }
  }
};
</script>