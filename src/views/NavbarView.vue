<template>
    <div class="">
        <div class="h-20 border flex justify-between items-center px-4">
            <navbar-logo />
            <navbar-icons :class="'ml-auto mr-3 hidden'" />
            <navbar-search-form :class="''" />
            <navbar-menu :class="''" />
        </div>
    </div>
</template>


<script>
import { defineAsyncComponent } from "vue"
    export default {
    name: "NavbarView",
    components: {
        NavbarLogo: defineAsyncComponent(() => import("@/components/shared/Navbar/NavbarLogo.vue")),
        NavbarIcons: defineAsyncComponent(() => import("@/components/shared/Navbar/NavbarIcons.vue")),
        NavbarSearchForm: defineAsyncComponent(() => import("@/components/shared/Navbar/NavbarSearchForm.vue")),
        NavbarMenu: defineAsyncComponent(() => import("@/components/shared/Navbar/NavbarMenu.vue")),
    }
}

</script>


<style scopped>

</style>
