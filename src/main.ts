import { createApp } from 'vue';
import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import { install as VueMonacoEditorPlugin } from '@guolao/vue-monaco-editor'

import './style.css'
import App from './App.vue'

const app = createApp(App);

const routes: RouteRecordRaw[] = [];

const router = createRouter({
    history: createWebHistory(),
    routes
})

app.use(router);

app.use(VueMonacoEditorPlugin, {
    paths: {
        // The recommended CDN config
        vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.38.0/min/vs'
    },
})

app.mount("#app");