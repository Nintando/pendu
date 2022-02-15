import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import reportWebVitals from './reportWebVitals'
import Words from './Pages/AddWords/AddWords'
import AppNavbar from './Components/AppNavbar/AppNavbar'
import AccueilPage from './Pages/Accueil/Accueil'
import Pendu from './Pages/Pendu/Pendu'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <header>
        <AppNavbar />
      </header>
      <Routes>
        <Route index element={<AccueilPage />} />
        <Route path="/mots" element={<Words />} />
        <Route path="/pendu" element={<Pendu />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
