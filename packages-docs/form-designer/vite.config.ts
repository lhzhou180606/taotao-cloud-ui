import { defineConfig } from 'vite';

import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import { transformAssetUrls } from '@quasar/vite-plugin';

import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { QuasarResolver } from 'unplugin-vue-components/resolvers';

import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls }
    }),
    AutoImport({
      imports: ['vue'],
      resolvers: [QuasarResolver()]
    }),
    Components({
      resolvers: [QuasarResolver()]
    }),
    dts({
      include: ['src/**/*.ts', 'src/**/*.vue'],
      insertTypesEntry: true
    })
  ],
  resolve: {
    alias: {
      '/@': path.resolve(__dirname, 'src'),
      '/#': path.resolve(__dirname, 'types')
    }
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: '@taotaocloud/form-designer',
      fileName: format => `index.${format}.js`
    },
    minify: 'terser',
    terserOptions: {
      // 生产环境下移除console
      compress: {
        drop_console: true,
        drop_debugger: true
      },
      keep_classnames: true
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: [
        'vue',
        'quasar',
        'pinia',
        '@taotaocloud/components',
        '@taotaocloud/form-engine',
        '@taotaocloud/core',
        'vuedraggable'
      ],
      output: {
        assetFileNames: `assets/[name].[ext]`,
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'vue',
          quasar: 'quasar',
          pinia: 'pinia',
          '@taotaocloud/form-engine': 'taotaocloudFormEngine',
          '@taotaocloud/components': 'taotaocloudComponents',
          '@taotaocloud/core': 'taotaocloudCore',
          vuedraggable: 'vuedraggable'
        }
      }
    }
  }
});
