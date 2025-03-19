import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router";
import App from './App.tsx';
import './index.css';
import { Toaster } from 'sonner';
import { Provider } from 'react-redux';
import store from './store/index.ts';
createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
      <Toaster position='top-right' richColors/>
    </Provider>
  </BrowserRouter>
)
