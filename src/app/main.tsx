import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';

import '../i18n';
import './../shared/theme/global.css';
import { App } from './App';
import { TanstackProvider } from './providers/QueryClientProvider';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <TanstackProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </TanstackProvider>
  </StrictMode>,
);
