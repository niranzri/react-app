
import tasksFromJson from '../assets/tasks.json';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import classes from '../styles/task.module.css';
import {Fragment} from 'react';


//<button onClick={() => clickToDelete()} className="btn-delete"></button>
function Task(){
    const[tasks, setTasks] = useState(tasksFromJson.map((currentTask) => ({
        task: currentTask.task, 
        completed: currentTask.completed, 
        id: uuidv4()})
    ));
    
    const handleDelete = (id) => {
        const newTasks = tasks.filter((task) =>{
            return task.id !== id;
        }); 
    
        setTasks(newTasks);
    }
      
    return (
        <div className={classes.toDoList}>
            <h2>Tasks to do</h2>
            <ul>
            {tasks.map((currentTask) => {
                return (
                    <Fragment key={currentTask.id}>
                    {!currentTask.completed &&
                    <li className={classes.listItem}>   
                        <p className={classes.itemTask}>{currentTask.task}</p>
                        <button className={classes.btnTask} type='button' onClick={() => handleDelete(currentTask.id)}> Delete </button>
                    </li> }
                    </Fragment>
                );
            })}
            </ul>
        </div>
    );

}

export default Task;