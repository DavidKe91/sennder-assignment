<template>
  <div>
    <div v-if="errors.length">
      <ul class="errors">
        <li v-bind:key="error" v-for="error in errors">{{error}}</li>
      </ul>
    </div>
    <div v-show="currentTab === 0">
      <h2>{{this.type}}</h2>
      <span class="input-euro-symbol">
        <input
          id="employerMax"
          type="text"
          v-model="employerMax"
          placeholder="Please Enter Maximum Salary"
        />
      </span>
      <button v-on:click="checkForm(employerMax)">Submit</button>
    </div>
    <div v-show="currentTab === 1">
      <h2>{{this.type}}</h2>
      <span class="input-euro-symbol">
        <input
          id="employeeMax"
          type="text"
          v-model="employeeMin"
          placeholder="Please Enter Minimum Salary"
        />
      </span>
      <button v-on:click="checkForm(employeeMin)">Submit</button>
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
  margin: 10px auto;
}
.input-euro-symbol {
  position: relative;
}
.input-euro-symbol input {
  padding-left: 15px;
  min-width: 200px;
}
.input-euro-symbol:before {
  content: "€";
  position: absolute;
  left: 5px;
  top: 1px;
}
.errors {
  background-color: hsla(0, 87%, 54%, 0.7);
  color: #ffffff;
  max-width: 200px;
  margin: 0px auto;
  text-align: center;
  padding: 5px 10px;
  list-style: none;
}
</style>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Tab",
  props: {
    type: String
  },
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
        this.$store.commit("updateEmployerMax", parseInt(value));
      }
    },
    employeeMin: {
      get() {
        return this.$store.state.employeeMin;
      },
      set(value) {
        this.$store.commit("updateEmployeeMin", value);
      }
    },
    toggleClass: {
      get() {
        return this.$store.state.isActive;
      }
    }
  },
  methods: {
    checkForm: function(inputValue) {
      if (!inputValue) {
        this.errors.push("Input required");
        return false;
      }
      let matchNum = /^\d+$/.test(inputValue);
      if (!matchNum) {
        this.errors.pop();
        this.errors.push("Please use positive whole numbers only");
        return false;
      }
      if (this.currentTab == 0) {
        inputValue == this.employerMax;
        this.$store.commit("changeTab", 1);
        this.errors = [];
        this.$store.state.stepOneCompleted = true;
        console.log("Step One: " + this.$store.state.stepOneCompleted);
        return true;
      } else {
        inputValue == this.employeeMin;
        this.errors = [];
        this.$store.state.stepTwoCompleted = true;
        console.log("Step Two: " + this.$store.state.stepTwoCompleted);
        return true;
      }
    }
  }
};
</script>