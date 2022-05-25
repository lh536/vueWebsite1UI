<template>
    <div class="absolute top-10 w-full">
        <div class="border bg-webSite-white text-stone-800">
            <ul class="py-1">
                <li><navbar-search-history-item itemText="Option 1" /></li>
                <li><navbar-search-history-item itemText="Option 2" /></li>
                <li><navbar-search-history-item itemText="Option 3" /></li>
                <li><navbar-search-history-item itemText="Option 4" /></li>
            </ul>
        </div>
    </div>
</template>


<script>
import { defineAsyncComponent } from "vue";
    export default {
        name: 'NavbarSearchHistory',
        components: {
            NavbarSearchHistoryItem: defineAsyncComponent(() => import("@/components/shared/Navbar/NavbarSearchHistoryItem.vue")),
        }
    }

</script>


<style scopped>

</style>
