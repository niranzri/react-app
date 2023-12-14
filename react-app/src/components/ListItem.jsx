import classes from '../styles/list.module.css';
import { Link } from 'react-router-dom';


function ListItem({currentTask, handleDelete}){

    return(
        <>
            {!currentTask.completed &&
            <li className={classes.listItem}> 
                <Link key={currentTask.id} to= {`/tasks/${currentTask.id}`}>
                    <p className={classes.itemTask}>{currentTask.task}</p>
                </Link>
                <button className={classes.btnTask} type='button' onClick={() => {handleDelete(currentTask.id)}}> Delete </button>
            </li> }
        </>
    )
}

export default ListItem;

