<template>
    <svgIcon svgId="menu" :class="'w-7 h-7 rotate-180'" />
</template>


<script>
import { defineAsyncComponent } from 'vue'
    export default {
        name: 'NavbarMenu',
        components: {
            svgIcon: defineAsyncComponent(() => import ("@/components/shared/svgIcon.vue"))
        }
    }

</script>


<style scopped>

</style>
