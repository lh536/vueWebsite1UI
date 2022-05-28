<template>
    <div class="flex justify-between items-center px-3 py-2">
        <h4 class="text-xl font-semibold">{{title}}</h4>
        <svg-icon svgId="optionMenuChevron" :class="'w-6 h-6'" />
    </div>
</template>


<script>
import { defineAsyncComponent } from 'vue'

    export default {
        name: 'MainMenuCategoryTitle',
        props: {
            title: {
                type: String,
                default: 'Title',
                required: false,
            },
        },
        components: {
            SvgIcon: defineAsyncComponent(() => import("@/components/shared/SvgIcon.vue")),
        },
    }

</script>


<style scopped>

</style>
