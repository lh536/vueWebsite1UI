<template>
    <div class="">
        <div class="h-20 border flex justify-between items-center px-4">
            <navbar-logo />
            <navbar-icons :class="'ml-auto'" />
            <navbar-search-form :class="'hidden'" />
            <navbar-menu :class="'ml-3'" />
        </div>
    </div>
</template>


<script>
import { defineAsyncComponent } from "vue"
    export default {
    name: "NavbarView",
    components: {
        NavbarIcons: defineAsyncComponent(() => import("@/components/shared/Navbar/NavbarIcons.vue")),
        NavbarLogo: defineAsyncComponent(() => import("@/components/shared/Navbar/NavbarLogo.vue")),
        NavbarMenu: defineAsyncComponent(() => import("@/components/shared/Navbar/NavbarMenu.vue")),
        NavbarSearchForm: defineAsyncComponent(() => import("@/components/shared/Navbar/NavbarSearchForm.vue")),
    }
}

</script>


<style scopped>

</style>
