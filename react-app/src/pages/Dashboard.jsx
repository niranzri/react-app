import Task from '../components/List.jsx';
import Navbar from '../components/Navbar.jsx'
import Sidebar from '../components/Sidebar.jsx'
import Footer from '../components/Footer.jsx'
import  '../App.css';


//import { Link } from 'react-router-dom'
/*{tasks.map(task => (
            <Link to={`/tasks/${task._id}`} key={task._id}>
              <Task {...task} />
            </Link>*/


function DashBoard() {
    return (

  
        <div className='pageCtn' >
          <Task />
          </div>
        
        

    )
    }
  
    

    export default DashBoard