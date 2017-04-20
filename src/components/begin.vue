<template>
    <div class="page">
        <div class="logo"></div>
        <img class="pic" src="assets/pa01.png" alt="">
        <div class="btn" @click="jump">
            <img src="assets/pa03.png" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {

            }
        },
        methods: {
            jump () {
                this.$router.push('ani')
            }
        }
    }
</script>

<style lang="sass" scoped>
    .logo
        margin-bottom: 10%


    .pic
        margin-bottom: 20%
</style>