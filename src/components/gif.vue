<template>
    <div class="gif">
        <template v-for="(item, i) in items">
            <img :src="item" v-show="i === index" alt="">
        </template>
    </div>
</template>

<script>
    export default {
        data () {
            return {

            }
        },
        props: ['items', 'index']
    }
</script>

<style lang="sass" scoped>
    .gif
        img:not(:first-child)
            position: absolute
            top: 0
            left: 0
</style>