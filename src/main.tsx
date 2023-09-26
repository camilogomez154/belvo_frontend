import ReactDOM from 'react-dom/client'
import React from 'react'

import './styles/main.sass'
import { RouterManager } from './infrastructure/routes'
import { StoreManager } from './infrastructure/store'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StoreManager>
      <RouterManager />
    </StoreManager>
  </React.StrictMode>,
)
