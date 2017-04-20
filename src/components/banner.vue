<template>
    <div class="page">
        <div class="logo"></div>
        <my-gif class="pic" :items="items" :index="index"></my-gif>
        <div class="title">
            <img src="assets/scene01_02.png" alt="">
        </div>
        <div class="btn" @click="jump">
            <img src="assets/pa03.png" alt="">
        </div>
    </div>
</template>

<script>
    import gifGenerater from '../tools/gif-generater'

    const items = gifGenerater('../assets/scene01_', '.png', 12);
    let current = 0;
    let bol = true;

    export default {
        data () {
            return {
                items: items,
                index: current
            }
        },
        methods: {
            jump () {
                bol = false;
                this.$router.push('begin')
            }
        },
        components: {
            'my-gif': require('./gif.vue')
        },
        created () {
            let step = 0;
            const main = () => {
                if (!(step %= 5)) {
                    this.index = ++current;
                }
                if (current === items.length - 1) {
                    current = 0;
                }
                step++;
                bol && window.requestAnimationFrame(main);
            };
            window.requestAnimationFrame(main);
        }
    }
</script>

<style lang="sass">
    @import '../main'


    .page
        text-align: center


    .pic
        height: 540px
        position: relative

        img
            height: 100%
            left: 0
            right: 0
            @extend %center-block


    .title
        margin-bottom: 0
        @include animation(title, 2s infinite)
            from, to
                @include transform(translate3d(0, 0, 0))
            50%
                @include transform(translate3d(0, -10%, 0))
</style>