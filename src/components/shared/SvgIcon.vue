<template>
    <svg role="img">
        <use :xlink:href="`/icons/iconSet.svg#${svgId}`"></use>
    </svg>
</template>


<script>
    export default {
        name: 'SvgIcon',
        props: {
            svgId: {
                type: String,
                default: 'search',
                required: false,
            }
        }
    }

</script>


<style scopped>

</style>
