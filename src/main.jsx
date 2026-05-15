import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* [추가] AuthProvider로 전체 앱 감싸기 - 모든 컴포넌트에서 useAuth() 훅 사용 가능해짐 */}
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
)
