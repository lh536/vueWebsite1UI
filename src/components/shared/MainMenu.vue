<template>
    <div class="bg-webSite-white w-3/4 ml-auto divide-y divide-webSite-gray">

            <!-- MEN OPTION -->
            <main-menu-category-title title="Men" />
            <!-- <main-menu-category-options :options="['View all', 'NEW', 'Jackets & Vests', 'Sweaters', 'Fleece', 'T-shirts & Shirts', 'Trousers & Shorts', 'Accessories', 'Shoes']" /> -->
            <!-- WOMEN OPTION -->
            <main-menu-category-title title="Women" />
            <main-menu-category-options :options="['View all', 'NEW', 'Blazers, Suits & Separates', 'Coats & Jackets', 'Dresses', 'Jeans & Denim', 'Lingerie, Hosiery & Shapewear', 'Loungewear', 'Pants & Leggings', 'Shorts', 'Skirts', 'Sleepwear & Robes', 'Sweaters', 'Sweatshirts & Hoodies', 'Swimsuits & Cover-Ups', 'Tops']" />
            <!-- KIDS OPTION -->
            <main-menu-category-title title="Kids" />
            <main-menu-category-options :options="['View all', 'NEW','Coats & Jackets','Jeans & Denim','Leggings & Pants','Pajamas & Robes','Shirts','Shorts','Sweaters','Swimwear']" />
            <!-- LANGUAGE OPTION -->
            <div class="flex items-center space-x-2 py-2 px-3">
                <svg-icon svgId="location" :class="'w-5 h-5'" />
                <h4 class="">English</h4>
            </div>



    </div>
</template>


<script>
import { defineAsyncComponent } from 'vue'
    export default {
        name: 'MainMenu',
        components: {
            MainMenuCategoryTitle: defineAsyncComponent(() => import("@/components/shared/MainMenu/MainMenuCategoryTitle.vue")),
            MainMenuCategoryOptions: defineAsyncComponent(() => import("@/components/shared/MainMenu/MainMenuCategoryOptions.vue")),
            SvgIcon: defineAsyncComponent(() => import("@/components/shared/SvgIcon.vue")),
        }
    }

</script>


<style scopped>

</style>
