import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import SingUp from './Components/Body/SignUp/index.jsx'
import Navbar from './Components/Navbar/index.jsx'
import ArrayUI from './Components/Body/ArrayUI/index.jsx'
import Body from './Components/Body/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <Body/>
  </React.StrictMode>,
)
