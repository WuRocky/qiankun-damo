import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { registerMicroApps, start } from 'qiankun';

createApp(App).mount('#app')


registerMicroApps([
  {
      name: 'sub-app-vue3',
    entry: 'http://localhost:7100', // Vue3 子應用
    container: '#sub-container',
    activeRule: '/sub-a',
  },
  {
    name: 'sub-app-react',
    entry: 'http://localhost:7200', // React 子應用
    container: '#sub-container',
    activeRule: '/sub-b',
  },
  {
    name: 'sub-app-vanilla',
    entry: 'http://localhost:7300', // HTML 子應用
    container: '#sub-container',
    activeRule: '/sub-c',
  },
  {
    name: 'sub-app-vue2',
    entry: 'http://localhost:7400', // vue2 子應用
    container: '#sub-container',
    activeRule: '/sub-d',
  }
]);
  
start();