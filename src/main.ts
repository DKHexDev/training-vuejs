import { createApp } from 'vue';
import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

import './style.css'
import App from './App.vue'

const app = createApp(App);

const routes: RouteRecordRaw[] = [];

const router = createRouter({
    history: createWebHistory(),
    routes
})

app.use(router);

app.mount("#app");