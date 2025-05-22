import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { qiankun } from 'vite-plugin-qiankun';

export default defineConfig({
  plugins: [react(), qiankun('sub-app-b', { useDevMode: true })],
  base: '/',
});
