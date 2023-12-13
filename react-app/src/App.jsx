import { useState } from 'react'
import ironhackLogo from './assets/ironhack-logo-xs.png';
import Navbar from './components/Navbar.jsx'
import Sidebar from './components/Sidebar.jsx'
import Footer from './components/Footer.jsx'
import Task from './components/Task.jsx'
import './App.css'



//<Sidebar />
function App() {



  return (
    <>

      <Navbar />
      
   <div>
      <Sidebar />
      <Task />
   </div>
      <Footer />
      
    </>
  )
}

export default App
