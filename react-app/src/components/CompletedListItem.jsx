import classes from '../styles/completedlist.module.css';
import { Link } from 'react-router-dom';


function CompletedListItem({currentTask, handleUndo}){

    return(
        <>
            {currentTask.completed &&
            <li className={classes.listItem}> 
                <Link key={currentTask.id} to= {`/tasks/${currentTask.id}`}>
                    <p className={classes.itemTask}>{currentTask.task}</p>
                </Link>
                <button className={classes.btnTask} type='button' onClick={() => {handleUndo(currentTask.id)}}> Undo </button>
            </li> }
        </>
    )
}

export default CompletedListItem;
