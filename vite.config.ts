import { fileURLToPath, URL } from 'node:url'
import { viteMockServe } from "vite-plugin-mock"
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import path from 'path'
<<<<<<< HEAD

export default defineConfig(({ command }) => {
  return {
  plugins: [
    vue(),
    viteMockServe({
      mockPath:'mock',
      localEnabled: command === "serve",
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
=======
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
export default defineConfig(({ command }) => {
  return {
    plugins: [
      vue(),
      //svg
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        symbolId: 'icon-[dir]-[name]',
      }),
      viteMockServe({
        mockPath: 'mock',
        localEnabled: command === "serve",
      }),
    ],
    resolve: {
      alias: {
        //'@': fileURLToPath(new URL('./src', import.meta.url))
        "@": path.resolve(__dirname, "./src")
      }
    },
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {
            hack: `true; @import (reference) "${path.resolve("src/styles/base.less")}";`,
          },
          javascriptEnabled: true,
>>>>>>> 56a8778e9e5317507b7d344cda36908b812a3b4c
        },
      },
    },
<<<<<<< HEAD
=======
    server: {
      proxy: {
        '/api': {
          target: 'http://sph-api.atguigu.cn',
          /* 是否代理跨域 */
          changeOrigin: true,
          /* 是否路径重写 */
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      }
    }
>>>>>>> 56a8778e9e5317507b7d344cda36908b812a3b4c
  }
}}
)
