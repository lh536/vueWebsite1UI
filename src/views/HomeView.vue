<template>
    <h1>Home View</h1>
    <demo-form message="Hi!! I'm a message from App.vue" />
    <counter />
</template>


<script>
import { defineAsyncComponent } from "vue" // LAZY LOADING
// import DemoForm from "@/modules/demo/components/DemoForm.vue"
    export default {
        name: 'HomeView',
        components: {
            DemoForm: defineAsyncComponent ( () => import ('@/components/DemoForm.vue')), // LAZY LOADING
            Counter: defineAsyncComponent ( () => import ('@/components/Counter.vue'))
        }
    }

</script>


<style scopped>

</style>
