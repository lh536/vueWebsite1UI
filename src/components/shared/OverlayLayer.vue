<template>
    <div v-if="showMenu" class="absolute top-0 bg-black/75 w-full h-full z-10"></div>
</template>


<script>
import { mapState } from "vuex";
    export default {
        name: 'OverlayLayer',
        computed: {
            ...mapState(['showMenu'])
        }
    }

</script>


<style scopped>

</style>
