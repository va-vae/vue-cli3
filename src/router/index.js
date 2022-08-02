import Vue from 'vue'
import VueRouter from 'vue-router'
import { setStore } from "@/utils/store";
import Layout from "../components/Layout/Layout";

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: '',
    component: Layout,
    children: [
      {
        path: '/pageOne',
        meta: {name: '首页'},
        component: Layout
      }
    ]
  },
]


const router = new VueRouter({
  routes
})
setStore({name: 'menuList', content: routes, type: 'session'})
export default router
