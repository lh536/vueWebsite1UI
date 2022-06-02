<template>
    <div v-if="showMenu" class="absolute w-full min-h-full bg-black/75 z-10"></div>
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
