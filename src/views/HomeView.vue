<template>
    <h1>Home View</h1>
    <demo-form message="Hi!! I'm a message from App.vue" />
    <counter />
</template>


<script>
import { defineAsyncComponent } from "vue"
    export default {
        name: 'HomeView',
        components: {
            DemoForm: defineAsyncComponent(() => import("@/components/DemoForm.vue")),
            Counter: defineAsyncComponent(() => import("@/components/Counter.vue")),
        }
    }

</script>


<style scopped>

</style>
