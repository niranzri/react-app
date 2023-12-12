import { useState } from 'react'
import ironhackLogo from './assets/ironhack-logo-xs.png';
import Navbar from './components/Navbar.jsx'
import Sidebar from './components/Sidebar.jsx'
import Footer from './components/Footer.jsx'
import './App.css'


function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Footer />
    </>
  )
}

export default App
