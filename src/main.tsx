import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App.jsx'

const appContainer = document.getElementById('appContainer') as HTMLElement
const root = createRoot(appContainer)

root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)
