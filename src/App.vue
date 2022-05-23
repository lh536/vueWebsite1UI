<template>
    <img alt="Vue logo" class="logo mx-auto py-12" src="@/assets/logo.svg" width="125" height="125" />
    <!-- <home-view /> -->
    <header>
        <nav class="text-center space-x-6 pt-2">
            <router-link class="px-4 py-2 rounded-xl border-2 hover:bg-slate-600 hover:text-slate-200" to="/">Home</router-link>
            <router-link class="px-4 py-2 rounded-xl border-2 hover:bg-slate-600 hover:text-slate-200" to="/about">About</router-link>
        </nav>
    </header>
    <router-view />

</template>


<script>
import { RouterLink, RouterView } from "vue-router"
import { defineAsyncComponent } from "vue"

  export default {
    name: 'App',
    components: {
        HomeView: defineAsyncComponent( () => import ('@/views/HomeView.vue') ),
    },
  }

</script>


<style scopped>

</style>
