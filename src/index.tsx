import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from 'react-redux';
import store from "./Redux/store"
const queryClient = new QueryClient();
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
 
  <React.StrictMode>
   
     <QueryClientProvider client={queryClient}>
     <BrowserRouter> 
     <Provider store={store}>
     <App />
     </Provider>
     </BrowserRouter>
    </QueryClientProvider>
   
  </React.StrictMode>
);

