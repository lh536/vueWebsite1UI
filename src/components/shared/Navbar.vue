<template>
    <div class="z-20">
        <div class="h-20 flex justify-between items-center px-4">
            <navbar-logo :class="'mr-3'" />
            <navbar-icons v-if="!showSearchForm" :class="'ml-auto'" />
            <navbar-search-form />
            <navbar-menu :class="'ml-3'" @click="showMenuToogle" />
        </div>
    </div>
</template>


<script>
import { mapState, mapActions } from "vuex";
import { defineAsyncComponent } from "vue"
    export default {
    name: "Navbar",
    components: {
        NavbarLogo: defineAsyncComponent(() => import("@/components/shared/Navbar/NavbarLogo.vue")),
        NavbarIcons: defineAsyncComponent(() => import("@/components/shared/Navbar/NavbarIcons.vue")),
        NavbarSearchForm: defineAsyncComponent(() => import("@/components/shared/Navbar/NavbarSearchForm.vue")),
        NavbarMenu: defineAsyncComponent(() => import("@/components/shared/Navbar/NavbarMenu.vue")),
    },
    methods: {
        ...mapActions(['showMenuToogle'])
    },
    computed: {
        ...mapState(['showSearchForm'])
    }
}

</script>


<style scopped>

</style>
