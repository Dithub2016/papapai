<template>
    <div class="page">
        <div class="logo"></div>
        <div class="ani" :class="{opa: isActive}">
            <template v-for="(item, index) in trans">
                <img
                    :style="item"
                    @touchstart="touchstart"
                    @touchmove="touchmove(index, $event)"
                    src="assets/pa02.png"
                    alt=""
                >
            </template>
            <div class="result" v-if="seenResult">
                <img :src="result" alt="">
                <img @click="jump" src="assets/scene03_btn.png" alt="">
            </div>
            <img src="assets/font_top.png" alt="" v-if="fontTopSeen" class="font_top">
        </div>
    </div>
</template>

<script>
    const wait = (func, steps) => {
        let step = 0;
        const main = () => {
            if (step === steps) {
                func();
            } else {
                step++;
                window.requestAnimationFrame(main);
            }
        };
        main();
    };
    // 生成随机数
    const random = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min)
    };
    // 卡牌动画
    const ani = (that, time, resolve) => {
        wait(() => {
            that.trans = that.trans.map(function(item, index) {
                return {
                    top: '',
                    transition: `all ${.75}s ${index * .1}s`,
                    transform: `translate3d(${random(150, -150)}%, ${random(150, -150)}%, 0) rotate(${time * random(90, 180)}deg)`
                }
            });
            resolve && resolve();
        }, 80 * time);
    };
    let touchStartLocation;
    let bol = false;
    const result = ['assets/scene03_img01.png','assets/scene03_img02.png','assets/scene03_img03.png','assets/scene03_img04.png','assets/scene03_img05.png','assets/scene03_img06.png','assets/scene03_img07.png','assets/scene03_img08.png'];
    let numb = 0;
    export default {
        data () {
            return {
                trans: new Array(8).fill({
                    transition: '',
                    transform: '',
                    top: ''
                }),
                isActive: false,
                result: '',
                seenResult: false,
                fontTopSeen: false
            }
        },
        methods: {
            touchstart (eve) {
                touchStartLocation = eve.touches[0].clientY;
            },
            touchmove (index, eve) {
                if (bol) {
                    if (eve.touches[0].clientY < touchStartLocation) {
                        this.trans[index].top = '-150px';
                        this.trans[index].opacity = 1;
                        bol = false;
                        this.isActive = true;
                    }
                    wait(() => {
                        this.trans[index].transform = 'translate3d(0, 0, 0) rotate(0)'
                    }, 100);
                    wait(() => {
                        this.trans[index].transform = 'scale(2) rotateY(540deg)';
                        this.trans[index].opacity = 0;
                    }, 250);
                    wait(() =>{
                        if (numb === 0) numb = random(1, 8);
                        this.result = result[numb];
                        this.seenResult = true;
                    }, 350);
                }
            },
            jump () {
                this.$router.push({ name: 'last', params: { result: numb }});
                numb = 0;
            }
        },
        created () {

            this.trans = this.trans.map(function(item, index) {
                return {
                    transition: `all ${.75}s ${index * .1}s`
                }
            });

            let i = 1;
            while (i <= 5) {
                ani(this, i++)
            }
            new Promise((resolve, reject) => {
                ani(this, i, resolve)
            })
            .then(() => {
                this.trans = this.trans.map(function(item, index) {
                    return {
                        transition: `all ${.75}s ${index * .1}s`,
                        transform: `translate3d(0, 0, 0) rotate(0)`,
                        top: ''
                    }
                });
                wait(() => {
                    bol = true;
                    this.trans = this.trans.map(function(item, index) {
                        return {
                            transition: `all ${.75}s ${index * .1}s`,
                            transform: `rotate(${-55 + index * 15}deg) translate3d(0, -100%, 0)`,
                            top: '',
                            opacity: ''
                        }
                    });
                    this.fontTopSeen = true
                }, 200);
            })
        }
    }
</script>

<style lang="sass" scoped>
    @import "../main"
    .page
        overflow: hidden
        position: relative


    .logo
        margin-bottom: 50%


    .ani
        position: relative
        width: 185px
        height: 260px
        @extend %center-block
        img
            position: absolute
            left: 0
            top: 0
        .font_top
            position: absolute
            top: 90%
            left: -90%

    .opa
        img
            opacity: 0


    .result
        position: fixed
        width: 100vw
        height: 100vh
        top: 0
        left: 0
        text-align: center
        img
            opacity: 1
            position: static
            margin-top: 20%
</style>
