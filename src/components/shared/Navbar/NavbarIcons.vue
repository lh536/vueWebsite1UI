<template>
    <div>
        <ul class="flex items-center space-x-4">
            <li>
                <svg-icon svgId="search" :class="'w-7 h-7'" />
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
import { defineAsyncComponent } from "vue"
    export default {
        name: 'NavbarIcons',
        components: {
            SvgIcon: defineAsyncComponent(() => import("@/components/shared/SvgIcon.vue")),
        }
    }

</script>


<style scopped>

</style>
