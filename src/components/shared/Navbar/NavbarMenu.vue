<template>
    <div>
        <svg-icon v-if="!showMenu" svgId="menu" :class="'w-7 h-7 rotate-180'" />
        <svg-icon v-if="showMenu" svgId="cancel" :class="'w-7 h-7'" />
    </div>
</template>


<script>
import { mapState } from "vuex";
import { defineAsyncComponent } from 'vue'
    export default {
        name: 'NavbarMenu',
        components: {
            SvgIcon: defineAsyncComponent(() => import("@/components/shared/SvgIcon.vue")),
        },
        computed: {
            ...mapState(['showMenu'])
        }
    }

</script>


<style scopped>

</style>
