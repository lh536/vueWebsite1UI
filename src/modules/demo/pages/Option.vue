<template>
    <h1>Option Page</h1>
    <h2 class="text-4xl text-gray-400 text-center">COUNTER FROM STORE: {{counter}}</h2>
</template>


<script>
import { mapState } from "vuex";
    export default {
        name: 'Option',
        computed: {
            ...mapState(['counter'])
        }
    }

</script>


<style scopped>

</style>
