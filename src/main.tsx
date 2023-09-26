import ReactDOM from 'react-dom/client'
import React from 'react'

import { RouterManager } from './infrastructure/routes'
import { StoreManager } from './infrastructure/store'

import './styles/main.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StoreManager>
      <RouterManager />
    </StoreManager>
  </React.StrictMode>,
)
