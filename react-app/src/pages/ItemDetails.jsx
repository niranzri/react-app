import  '../App.css';
import classes from '../styles/list.module.css'
import '../components/ListItem.jsx'
import { NavLink, useParams } from 'react-router-dom'

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
            <h2>Tasks Details</h2>
            <p>{taskDetails.task}: </p>
            {!taskDetails.completed ? <span>Pending</span> : <span>Done</span>}
            <NavLink to="/">   
            <button className={classes.btnBack}>
              <p> Go Back</p>
            </button>
          </NavLink> 
          </div>
        </div>
    )
}

export default ItemDetails;