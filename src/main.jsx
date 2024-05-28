import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import store from './redux'
import { ConfigProvider } from 'antd'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider theme={{ token: { colorPrimary: '#FFC100' } }}>
        <App />
      </ConfigProvider>
    </Provider>
  </React.StrictMode>,
)
