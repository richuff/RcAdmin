import { fileURLToPath, URL } from 'node:url'
import {viteMockServe} from "vite-plugin-mock"
import { defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

import path from 'path'

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
        },
        javascriptEnabled: true,
      },
    },
  }
}}
)
