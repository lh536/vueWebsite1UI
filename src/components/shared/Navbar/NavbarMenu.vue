<template>
    <div>
        <svg-icon svgId="menu" :class="'w-7 h-7 rotate-180 hidden'" />
        <svg-icon svgId="cancel" :class="'w-8 h-8'" />
    </div>
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
