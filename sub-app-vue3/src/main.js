import { createApp } from 'vue';
import App from './App.vue';
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun';
import router from './router';

let app;

function render(props) {
  app = createApp(App);
  app.use(router);
  app.mount(props?.container?.querySelector('#app') || '#app');
}

renderWithQiankun({
  mount(props) {
    render(props);
  },
  bootstrap() {},
  unmount() {
    app?.unmount();
  },
});

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render();
}
