<template>
    <svg role="img">
        <use :xlink:href="`./icons/iconSet.svg#${svgId}`"></use>
    </svg>
</template>


<script>
    export default {
        name: 'svgIcon',
        props: {
            svgId: String,
        }
    }

</script>


<style scopped>

</style>
