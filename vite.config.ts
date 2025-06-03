import { fileURLToPath, URL } from 'node:url'
import { defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

import path from 'path'
import {createSvgIconsPlugin} from 'vite-plugin-svg-icons'
export default defineConfig(({ command }) => {
  return {
  plugins: [
    vue(),
    //svg
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(),'src/assets/icons')],
      symbolId:'icon-[dir]-[name]',
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },

  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          hack: `true; @import (reference) "${path.resolve("src/styles/base.less")}";`,
        },
        javascriptEnabled: true,
      },
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://sph-api.atguigu.cn',
        /* 是否代理跨域 */
        changeOrigin: true,
        /* 是否路径重写 */
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    }}
  }
}
)
