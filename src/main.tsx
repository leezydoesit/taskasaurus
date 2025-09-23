import './index.css'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import {QueryProvider} from "@/providers/QueryProvider";

const rootElement = document.getElementById('root')
if (!rootElement) {
    throw new Error("Root element not found")
}

createRoot(rootElement).render(
    <React.StrictMode>
        <QueryProvider>
            <App />
        </QueryProvider>
    </React.StrictMode>
)
