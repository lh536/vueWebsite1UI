<template>
    <svg-icon svgId="menu" :class="'w-7 h-7 rotate-180'" />
</template>


<script>
import { defineAsyncComponent } from 'vue'
    export default {
        name: 'NavbarMenu',
        components: {
            SvgIcon: defineAsyncComponent(() => import("@/components/shared/SvgIcon.vue")),
        }
    }

</script>


<style scopped>

</style>
