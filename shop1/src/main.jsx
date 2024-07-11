import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './i18n';
import './index.css'
import ProductProvider from './components/provider/ProductProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ProductProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ProductProvider>,
)
