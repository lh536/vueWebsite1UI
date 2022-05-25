<template>
    <div class="flex justify-between px-1 py-0.5 text-sm text-stone-800 hover:bg-webSite-green hover:text-webSite-white cursor-pointer">
        <div class="flex items-center space-x-2">
            <svg-icon svgId="search" :class="'w-4 h-4'"/>
            <span>{{itemText}}</span>
        </div>
        <button class="flex items-center">
            <svg-icon svgId="arrowSearchHistoryItem" :class="'w-4 h-4 rotate-45'" />
        </button>

    </div>
</template>


<script>
import { defineAsyncComponent } from 'vue'

    export default {
        name: 'NavbarSearchHistoryItem',
        components: {
            SvgIcon: defineAsyncComponent(() => import("@/components/shared/SvgIcon.vue")),
        },
        props: {
            itemText: {
                type: String,
                default: 'Text Search History Item',
                required: true,
            }
        },

    }

</script>


<style scopped>

</style>
