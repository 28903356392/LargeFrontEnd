import { createRouter, createWebHistory } from 'vue-router'

/**
 * 插件vite-plugin-pages配置
 *
 */
// 自动引入路由配置
// import routes from '~pages'

/** 插件unplugin-vue-router配置
 *
 */
import { routes } from 'vue-router/auto-routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// 前置路由

export default router
