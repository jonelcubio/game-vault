import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import {App} from './App.jsx'

createRoot(document.getElementById('root')).render(
 <BrowserRouter>
   <App />
 </BrowserRouter>
)
