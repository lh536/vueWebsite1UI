<template>
    <carousel-image />
</template>


<script>
import { defineAsyncComponent } from 'vue'
    export default {
        name: 'CarouselSection',
        components: {
            CarouselImage: defineAsyncComponent(() => import("@/components/CarouselSection/CarouselImage.vue")),
        }
    }

</script>


<style scopped>

</style>
