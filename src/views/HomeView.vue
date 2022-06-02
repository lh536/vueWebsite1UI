<template>
    <div class="relative flex flex-col max-h-screen">
        <navbar />
        <div class="relative flex flex-col grow">
            <overlay-layer />
            <main-menu />
            <main>
                <hero-section />
                <carousel-section />
                <banner-men-women />
            </main>
        </div>
        <!-- <h1>Home View</h1>
        <demo-form message="Hi!! I'm a message from App.vue" />
        <counter /> -->
    </div>
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
            BannerMenWomen: defineAsyncComponent(() => import("@/components/BannerMenWomen/BannerMenWomen.vue")),
            // DemoForm: defineAsyncComponent(() => import("@/components/DemoForm.vue")),
            // Counter: defineAsyncComponent(() => import("@/components/Counter.vue")),
        }
    }

</script>


<style scopped>

</style>
