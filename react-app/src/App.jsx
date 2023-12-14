import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import ironhackLogo from './assets/ironhack-logo-xs.png'; //placeholder for Navbar
import Navbar from './components/Navbar.jsx'
import Sidebar from './components/Sidebar.jsx'
import Footer from './components/Footer.jsx'
import './App.css'
import DashBoard from './pages/Dashboard.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ItemDetails from './pages/ItemDetails.jsx';
import tasksFromJson from './assets/tasks.json';
import { Route, Routes } from 'react-router-dom'

/*
About Page - A page showing the project description and information about the team members (students) working on the project, including links to your GitHub and LinkedIn profiles.
Not Found Page - A page that renders whenever a user navigates to a URL route that doesn’t exist in the app.
*/

function App() {

  const[tasks, setTasks] = useState(tasksFromJson.map((currentTask) => ({
    ...currentTask, id: uuidv4()})
  ));

  return (
    <>
     <Navbar />
        <div className='middleCtn'>
          <Sidebar />
          <Routes>
            <Route path='/' element={<DashBoard tasks={tasks} setTasks = {setTasks}/>} />
            <Route path='/tasks/:taskId' element={<ItemDetails tasks={tasks}/>} />
            <Route path='/AboutPage' element={<AboutPage />} />
            <Route path='*' element={<h1>404 Page</h1>} />
          </Routes>
        </div>
      <Footer />
    </>
  )
}

export default App
