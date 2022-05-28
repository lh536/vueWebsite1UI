<template>
    <ul class="text-sm space-y-1 py-1">
        <li v-for="(option, index) in options" :key="index" class="hover:bg-webSite-green hover:text-white px-5" >{{ option }}</li>
    </ul>
</template>


<script>
    export default {
        name: 'MainMenuCategoryOptions',
        props: {
            options: {
                type: Array,
                default: [],
                required: false
            },
        },
    }

</script>


<style scopped>

</style>
