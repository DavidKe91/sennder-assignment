import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        employerMax: null,
        employeeMin: null,
        isActive: false,
        currentTab: 0,
        tabs: ['Employer', 'Employee'],
        stepOneCompleted: false,
        stepTwoCompleted: false
    },
    mutations: {
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
            state.employerMax = null
            state.isActive = null;
            state.currentTab = 0;
            state.stepOneCompleted = false;
            state.stepTwoCompleted = false;
        }
    },
    getters: {
        stepOneCompleted: state => {
            return state.stepOneCompleted;
        },
        tabs: state => {
            return state.tabs;
        },
        currentTab: state => {
            return state.currentTab
        }
    }
});


new Vue({
    render: h => h(App),
    store: store
}).$mount('#app')
