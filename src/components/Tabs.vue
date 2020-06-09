<template>
  <div class="tabs">
    <ul class="parent-tab">
      <!-- Outputs array of tabs. Takes the position of the clicked tab, passes it to the changeTab mutation and sets currentTab variable to the index passed. Dynamically renders "active" class depending on currentTab position-->
      <li
        v-for="(tab, index) in tabs"
        v-bind:key="index"
        v-on:click="changeTab(index)"
        :class="{activeTab: currentTab === index}"
      >
        <p>{{tab}}</p>
      </li>
    </ul>
    <div class="tab-content">
      <Tab />
    </div>
  </div>
</template>

<script>
import Tab from "./Tab";
import { mapGetters } from "vuex";

export default {
  name: "Tabs",
  components: {
    Tab
  },
  computed: mapGetters(["tabs", "currentTab"]),
  methods: {
    changeTab: function(index) {
      this.$store.commit("changeTab", index);
    }
  }
};
</script>

<style scoped>
.parent-tab {
  padding-left: 0px;
  list-style: none;
  border-bottom: 1px solid #dee2e6;
  display: flex;
  flex-wrap: wrap;
  max-width: 600px;
  margin: 0px auto;
}
.parent-tab li {
  display: block;
  padding: 0px;
  cursor: pointer;
  margin-bottom: -1px;
}
.parent-tab li p {
  display: block;
  text-decoration: none;
  border-bottom: 1px;
  padding: 8px 15px;
  margin-bottom: 0px;
  border: 1px solid transparent;
  border-top-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;
}
.parent-tab li.activeTab p {
  color: #41b883;
  background-color: #fff;
  border-color: #dee2e6 #dee2e6 #fff;
}
</style>