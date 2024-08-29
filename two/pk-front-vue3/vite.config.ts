import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'

// 自动生成路由
// import VitePages from "vite-plugin-pages";
import VueRouter from 'unplugin-vue-router/vite'

// 自动引入vue方法
import AutoImport from 'unplugin-auto-import/vite'

// 自动引入路由
import { VueRouterAutoImports } from 'unplugin-vue-router'

//自动引入组件
import AutoComponents from 'unplugin-vue-components/vite'

//解析饿了么方法组件并引入
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueRouter(),
    vue(),
    vueJsx(),
    vueDevTools(),
    // 自动引入
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/ // .md
      ],
      imports: ['vue', VueRouterAutoImports, '@vueuse/core'],
      resolvers: [ElementPlusResolver()],
      dts: './auto-imports.d.ts' // 控制文件路径
    }),
    AutoComponents({
      directoryAsNamespace: true,
      directives: true,
      resolvers: [ElementPlusResolver()]
    })
    /** 控制路由存放文件
     * {dirs:"src/vite"}
     * */
    // VitePages()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
