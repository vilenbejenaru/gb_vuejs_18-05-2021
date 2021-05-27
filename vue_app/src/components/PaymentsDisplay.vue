<template>
    <div>
        <div v-for="(item, index) in items" :key="index">
        {{index +1}} - {{item}}
        </div>
    </div>
</template>

<script>
    export default {
        name: 'PaymentsDisplay',
        props: {
            items: {
                type: Array,
                default: () => [ ]
            },
        },
        data() {
            return {
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>
