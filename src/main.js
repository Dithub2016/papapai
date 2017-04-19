import Vue from 'vue'
import router from './router'

require('./page.sass');

window.requestAnimationFrame =
    window.requestAnimationFrame ||
    ((func) => {
        setTimeout(func, 16.7);
    });


const loading = new Vue({
    el: '#app',
    router
});

