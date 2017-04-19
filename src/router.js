/**
 * Created by Administrator on 2017/4/13.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'hash',
    linkActiveClass: 'u-link--Active',
    routes
})
