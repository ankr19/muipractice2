import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import './index.css'
import Authentification from './pages/Authentification'
import Database from './pages/Database'
import Navbar from './shared/Navbar/Navbar'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* <App /> */}
        <Route path='/' element={<Navbar />}>
          <Route path='/authentifcation' element={<Authentification />} />
          <Route path='/database' element={<Database />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
