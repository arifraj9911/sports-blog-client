import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/Router.jsx'
import AuthProvider from './provider/AuthProvider.jsx';
import AOS from 'aos';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

{/* <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" /> */}

AOS.init();
import 'aos/dist/aos.css';

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <QueryClientProvider client={queryClient}>
        <AuthProvider><RouterProvider router={router} /></AuthProvider>
    </QueryClientProvider>
    
  </React.StrictMode>,
)
