import { createStore } from "vuex"

export default createStore ({
    state: {
        counter: 1000
    },

    getters: {

    },

    mutations: {
        increase(state, payload) {
            state.counter += payload
        },
        decrease(state, payload) {
            state.counter -= payload
        }
    },

    actions: {
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
