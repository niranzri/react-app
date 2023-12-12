import { useState } from 'react'
import classesNav from './styles/navbar.module.css'
import classesFooter from './styles/footer.module.css'
import classesSidebar from './styles/sidebar.module.css'
import ironhackLogo from './assets/ironhack-logo-xs.png';
import Navbar from './components/Navbar.jsx'
import Sidebar from './components/Sidebar.jsx'
import Footer from './components/Footer.jsx'


import './App.css'
//it's Marine
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
