<template>
    <navbar />
    <main-menu />
    <div class="relative">
        <overlay-layer />
        <hero-section />
        <carousel-section />
    </div>
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
            OverlayLayer: defineAsyncComponent(() => import("@/components/shared/OverlayLayer.vue")),
            HeroSection: defineAsyncComponent(() => import("@/components/HeroSection/HeroSection.vue")),
            CarouselSection: defineAsyncComponent(() => import("@/components/CarouselSection.vue")),
            // DemoForm: defineAsyncComponent(() => import("@/components/DemoForm.vue")),
            // Counter: defineAsyncComponent(() => import("@/components/Counter.vue")),
        }
    }

</script>


<style scopped>

</style>
