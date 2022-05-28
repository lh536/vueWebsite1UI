<template>
    <navbar />
    <main-menu :class="'hidden'" />
    <hero-section />
    <!-- <h1>Home View</h1>
    <demo-form message="Hi!! I'm a message from App.vue" />
    <counter /> -->
</template>


<script>
import { defineAsyncComponent } from "vue"
    export default {
        name: 'HomeView',
        components: {
            Navbar: defineAsyncComponent(() => import("@/components/shared/Navbar.vue")),
            MainMenu: defineAsyncComponent(() => import("@/components/shared/MainMenu.vue")),
            HeroSection: defineAsyncComponent(() => import("@/components/HeroSection/HeroSection.vue")),
            // DemoForm: defineAsyncComponent(() => import("@/components/DemoForm.vue")),
            // Counter: defineAsyncComponent(() => import("@/components/Counter.vue")),
        }
    }

</script>


<style scopped>

</style>
