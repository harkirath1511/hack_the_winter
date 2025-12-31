import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Control from './pages/control'
import Report from './pages/report'
import WebEditor from './pages/webEditor'
import PromptPage from './pages/PromptPage'
import Research from './pages/research'
import Breakdown from './pages/breakdown'
import Postmaker from './pages/postmaker'

// Initialize theme
const initializeTheme = () => {
  try {
    const saved = localStorage.getItem('theme')
    if (saved) {
      document.documentElement.setAttribute('data-theme', saved)
    } else {
      document.documentElement.setAttribute('data-theme', 'light')
    }
  } catch {
    document.documentElement.setAttribute('data-theme', 'light')
  }
}

initializeTheme()

const root = createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/prompt" element={<PromptPage />} />
        <Route path="/report" element={<Report />} />
        <Route path="/web-editor" element={<WebEditor />} />
        <Route path="/control" element={<Control />} />
        <Route path="/research" element={<Research />} />
        <Route path="/breakdown" element={<Breakdown />} />
        <Route path="/postmaker" element={<Postmaker />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
