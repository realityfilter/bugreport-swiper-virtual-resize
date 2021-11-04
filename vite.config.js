import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue({ refTransform: true })],
    optimizeDeps: {
        exclude: ['swiper'],
    },
    build: {
        outDir: 'docs'
    },
    base: "/bugreport-swiper-virtual-resize"
});
