<template>
    <div>
        <ul class="flex space-x-4">
            <li>
                <svgIcon svgId="search" :class="'w-7 h-7'" />
            </li>
            <li>
                <svgIcon svgId="user" :class="'w-7 h-7'" />
            </li>
            <li>
                <svgIcon svgId="shoppingCart" :class="'w-7 h-7'" />
            </li>
        </ul>
    </div>
</template>


<script>
import { defineAsyncComponent } from "vue"
    export default {
        name: 'NavbarIcons',
        components: {
            svgIcon: defineAsyncComponent ( () => import ('@/components/shared/svgIcon.vue'))
        }
    }

</script>


<style scopped>

</style>
