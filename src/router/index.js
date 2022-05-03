import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../components/Home.vue"
import Dashboard from "../components/Dashboard.vue"
import About from "../components/About.vue"
Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: "/shop",
        name: "shop",
        component: Dashboard
    },
    {
        path: "/about",
        name: "about",
        component: About
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router