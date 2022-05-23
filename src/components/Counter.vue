<template>
    <div class="mx-auto border flex justify-center flex-col w-1/2 mt-12">
        <span class="text-4xl font-semibold text-gray-700 text-center">{{counter}}</span>

        <div class="mx-auto space-x-12">
            <button @click="actionIncrease" class="py-2 px-4 bg-pink-400 text-3xl font-semibold text-gray-200 hover:bg-yellow-400 active:bg-purple-400 rounded">Increase</button>
            <button @click="actionDecrease(50)" class="py-2 px-4 bg-pink-400 text-3xl font-semibold text-gray-200 hover:bg-yellow-400 active:bg-purple-400 rounded">Decrease</button>
        </div>
    </div>
        </template>


<script>

import { mapState, mapActions } from "vuex";
    export default {
        name: 'Counter',
        methods: {
            ...mapActions(['actionIncrease', 'actionDecrease'])
        },
        computed: {
            ...mapState(['counter'])
        }
    }

</script>


<style scopped>

</style>
