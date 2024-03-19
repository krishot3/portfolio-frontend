import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './components/App.tsx'

import './css/index.css'
import "@fontsource/outfit";
import "@fontsource/roboto";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
