import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: [
            { find: '@', replacement: path.resolve(__dirname, 'src') },
            {
                find: '@components',
                replacement: path.resolve(__dirname, 'src/components')
            },
            {
                find: '@store',
                replacement: path.resolve(__dirname, 'src/store')
            },
            {
                find: '@module',
                replacement: path.resolve(__dirname, 'src/module')
            },
            {
                find: '@selector',
                replacement: path.resolve(__dirname, 'src/selector')
            },
            {
                find: '@interface',
                replacement: path.resolve(__dirname, 'src/interface')
            },
            {
                find: '@bridge',
                replacement: path.resolve(__dirname, 'src/components/bridge')
            },
            {
                find: '@assets',
                replacement: path.resolve(__dirname, 'src/assets')
            },
            {
                find: '@chart',
                replacement: path.resolve(__dirname, 'src/components/chart')
            },
            {
                find: '@common',
                replacement: path.resolve(__dirname, 'src/components/common')
            },
            {
                find: '@scss',
                replacement: path.resolve(__dirname, 'src/scss')
            }
        ]
    },
    server: {
        proxy: {
            '/api': {
                target: 'https://sgisapi.kostat.go.kr',
                changeOrigin: true,
                secure: false,
                rewrite: (path) => path.replace(/^\/api/, '')
            }
        }
    }
});
