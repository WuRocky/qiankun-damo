import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun';

let root = null;

function render(props) {
  root = ReactDOM.createRoot(props?.container?.querySelector('#root') || document.getElementById('root'));
  root.render(<App />);
}

renderWithQiankun({
  mount(props) {
    render(props);
  },
  bootstrap() {},
  unmount() {
    root.unmount();
  },
});

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render();
}
