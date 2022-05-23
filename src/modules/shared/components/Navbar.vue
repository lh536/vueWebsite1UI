<template>

    <nav class="flex justify-center">
        <ul class="flex space-x-6 text-purple-300 font-bold">
            <router-link to="/" class="bg-purple-600 hover:text-slate-50 px-4 py-2 rounded-md cursor-pointer">Home</router-link>
            <router-link to="/option" class="bg-purple-600 hover:text-slate-50 px-4 py-2 rounded-md cursor-pointer">Option</router-link>
            <router-link to="/about" class="bg-purple-600 hover:text-slate-50 px-4 py-2 rounded-md cursor-pointer">About</router-link>
        </ul>
    </nav>

</template>


<script>
    export default {
        name: 'Navbar',
    }

</script>


<style scopped>
    .router-link-exact-active {
        @apply bg-slate-800 border-2 border-purple-700 text-red-400
    }

</style>
