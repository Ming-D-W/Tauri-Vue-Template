import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { fileURLToPath } from 'node:url'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import vueDevTools from 'vite-plugin-vue-devtools'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig(({ mode }) => ({
  plugins: [
    vue(),
    // 仅在开发环境加载 Vue DevTools
    mode === 'development' && vueDevTools(),
    AutoImport({
      imports: [
        'vue',
        'pinia',
        'vue-router',
        {
          '@/stores': ['useAppStore', 'useSettingsStore'],
        },
      ],
      dts: 'auto-imports.d.js',
      vueTemplate: true,
      eslintrc: {
        enabled: true,
        filepath: './.eslintrc-auto-import.json',
      },
    }),
    Components({
      dts: 'components.d.js',
      dirs: ['src/components', 'src/components/common'],
      extensions: ['vue'],
      deep: true,
      directoryAsNamespace: false,
    }),
  ].filter(Boolean),
  base: './',
  build: {
    outDir: path.resolve(__dirname, 'dist'),
    emptyOutDir: true,
    target: 'esnext',
    minify: !process.env.TAURI_ENV_DEBUG ? 'esbuild' : false,
    sourcemap: !!process.env.TAURI_ENV_DEBUG,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          'vue-vendor': ['vue', 'pinia', 'vue-router'],
          'tauri-vendor': ['@tauri-apps/api'],
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@stores': path.resolve(__dirname, 'src/stores'),
      '@composables': path.resolve(__dirname, 'src/composables'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@api': path.resolve(__dirname, 'src/api'),
      '@utils': path.resolve(__dirname, 'src/utils')
    }
  },
  server: {
    port: 5173,
    host: 'localhost',
    strictPort: true,
    watch: {
      ignored: ['**/src-tauri/**']
    }
  },
  optimizeDeps: {
    include: ['vue', 'pinia']
  },
  clearScreen: false,
  envPrefix: ['VITE_', 'TAURI_']
}))
