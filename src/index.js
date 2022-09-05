import React from 'react'
import { createRoot } from 'react-dom/client'
import Main from './components/Main.jsx'

const appContainer = document.getElementById('appContainer')
const root = createRoot(appContainer)

root.render(<Main />)
