import  '../App.css';
import classes from '../styles/list.module.css'
import '../components/ListItem.jsx'
import { NavLink, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


function ItemDetails({tasks}) {
    const { taskId } = useParams()
    const taskDetails = tasks.find(task => task.id == taskId)
    console.log(taskId, taskDetails)

    if (!taskDetails) {
        return <Navigate to='/' />
    }

    return (
        <div className='pageCtn' >
          <div className={classes.toDoList}>
            <h2>Task Details </h2>
            <p><span> Name: </span>{taskDetails.task}</p>
            {!taskDetails.completed ? <p><span>Status:</span> Pending</p>: <p><span> Status: Done</span></p>}
            <NavLink to="/">   
            <button className={classes.btnBack}>
            <FontAwesomeIcon icon={faArrowLeft} size="2xl" />
            </button>
            </NavLink> 
          </div>
        </div>
    )
}

export default ItemDetails;