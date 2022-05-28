<template>
    <div>
        <ul v-if="!showSearchForm" class="flex items-center space-x-4">
            <li>
                <svg-icon @click="showSearchFormToogle" svgId="search" :class="'w-7 h-7'" />
            </li>
            <li>
                <svg-icon svgId="user" :class="'w-7 h-7'" />
            </li>
            <li>
                <svg-icon svgId="shoppingCart" :class="'w-7 h-7'" />
            </li>
        </ul>
    </div>
</template>


<script>
import { mapState, mapActions } from "vuex";
import { defineAsyncComponent } from "vue"
    export default {
        name: 'NavbarIcons',
        components: {
            SvgIcon: defineAsyncComponent(() => import("@/components/shared/SvgIcon.vue")),
        },
        methods: {
            ...mapActions(['showSearchFormToogle'])
        },
        computed: {
            ...mapState(['showSearchForm'])
        }
    }

</script>


<style scopped>

</style>
