import { createStore } from "vuex"

export default createStore ({
    state: {
        showSearchForm: false,
        showMenu: false,
        counter: 1000
    },

    getters: {

    },

    mutations: {
        showSearchForm(state) {
            state.showSearchForm = !state.showSearchForm
            state.showMenu = true ? state.showMenu = false : state.showMenu
        },
        showMenuToogle(state) {
            state.showMenu = !state.showMenu
            state.showSearchForm = true ? state.showSearchForm = false : state.showSearchForm
        },
        increase(state, payload) {
            state.counter += payload
        },
        decrease(state, payload) {
            state.counter -= payload
        }
    },

    actions: {
        showSearchFormToogle({commit}) {
            commit('showSearchForm')
        },
        showMenuToogle({commit}) {
            commit('showMenuToogle')
        },
        actionIncrease({commit}, number) {
            commit('increase', 100)
        },

        actionDecrease({commit}, number) {
            commit('decrease', number)
        },

        // accionBoton ({commit}, objeto ) {
        //     if (objeto.estado) {
        //         commit ('incrementar', objeto.numero)
        //     } else {
        //         commit ('disminuir', objeto.numero)
        //     }
        // }

    },
    modules: {

    }

})
