<template>
    <div v-if="showSearchForm" class="relative flex flex-col w-full sm:w-1/2 z-10">
        <form action="">
            <div class="relative">
                <!-- SEARCH ICON/BUTTON -->
                <button class="absolute flex justify-center items-center right-0 inset-y-0 w-10 bg-webSite-green text-webSite-white">
                    <svg-icon svgId="search" :class="'w-6 h-6'" />
                </button>
                <!-- INPUT TEXT -->
                <input class="border border-webSite-gray placeholder:text-webSite-gray selection:bg-webSite-green selection:text-webSite-white" id="search" name="search" type="text" autocomplete="" placeholder="Search">
                <!-- CANCEL ICON/BUTTON -->
                <span class="absolute right-10 border border-webSite-gray inset-y-0 flex border-l-0 w-10 justify-center items-center text-webSite-gray hover:text-stone-800">
                    <button>
                        <svg-icon @click="showSearchFormToogle" svgId="cancel" :class="'w-7 h-7'" />
                    </button>
                </span>
            </div>
        </form>
        <navbar-search-history />
    </div>
</template>


<script>
import { mapState, mapActions } from "vuex";
import { defineAsyncComponent } from "vue";
    export default {
        name: 'NavbarSearchForm',
        components: {
            SvgIcon: defineAsyncComponent(() => import("@/components/shared/SvgIcon.vue")),
            NavbarSearchHistory: defineAsyncComponent(() => import("@/components/shared/Navbar/NavbarSearchHistory.vue")),
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
