import tasksFromJson from './assets/tasks.json';
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import './App.css'
import Navbar from './components/Navbar.jsx'
import Sidebar from './components/Sidebar.jsx'
import Footer from './components/Footer.jsx'

import DashBoard from './pages/Dashboard.jsx';
import ItemDetails from './pages/ItemDetails.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import TaskHistory from './pages/TaskHistory.jsx';

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
            <Route path='/TaskHistory' element={<TaskHistory tasks={tasks} setTasks = {setTasks}/>} />
            <Route path='*' element={<ErrorPage/>} />
          </Routes>
        </div>
      <Footer />
    </>
  )
}

export default App
