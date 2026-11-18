import React from 'react'
import ReactDOM from 'react-dom/client'
import { GroundNestDetailPage } from '../features/projects/GroundNestDetailPage'
import '../styles/tokens.css'
import '../styles/global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GroundNestDetailPage />
  </React.StrictMode>,
)
