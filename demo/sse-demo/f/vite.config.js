/*
 * @Author: zyh 177748749@qq.com
 * @Date: 2024-07-25 17:51:35
 * @LastEditors: zyh 177748749@qq.com
 * @LastEditTime: 2024-07-26 09:14:20
 * @FilePath: \f\vite.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server:{
    // compress:false,
    proxy:{
      '/api':{
        target:'http://localhost:8002',
        changeOrigin:true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
