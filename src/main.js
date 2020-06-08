import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(Vuex)

const state = {
    employerMax: null,
    employeeMin: null,
    isActive: false,
    currentTab: 0,
    tabs: ['Employer', 'Employee'],
    stepOneCompleted: false,
    stepTwoCompleted: false
}

export const mutations = {
    updateEmployerMax(state, newEmployerMax) {
        state.employerMax = newEmployerMax;
    },
    updateEmployeeMin(state, newEmployeeMin) {
        state.employeeMin = newEmployeeMin;
    },
    changeTab(state, index) {
        state.currentTab = index;
    },
    completedStepOne(state) {
        state.stepOneCompleted = true;
        console.log(state.stepOneCompleted);
    },
    resetState(state) {
        state.employeeMin = null;
        state.employerMax = null;
        state.isActive = null;
        state.currentTab = 0;
        state.stepOneCompleted = false;
        state.stepTwoCompleted = false;
    }
}

export const getters = {
    stepOneCompleted: state => {
        return state.stepOneCompleted;
    },
    stepTwoCompleted: state => {
        return state.stepTwoCompleted;
    },
    tabs: state => {
        return state.tabs;
    },
    employerMax: state => {
        return state.employerMax;
    },
    employeeMin: state => {
        return state.employeeMin;
    },
    currentTab: state => {
        return state.currentTab
    }
}

export const store = new Vuex.Store({
    state,
    mutations,
    getters
})

const app = new Vue({
    render: h => h(App),
    store
}).$mount('#app')

if (window.Cypress) {
    window.app = app
}
