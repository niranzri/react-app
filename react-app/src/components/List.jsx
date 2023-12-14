
import tasksFromJson from '../assets/tasks.json';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import classes from '../styles/list.module.css';
import {Fragment} from 'react';
import ListItem from './ListItem.jsx';

//<button onClick={() => clickToDelete()} className="btn-delete"></button>
function List(){
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
                   <ListItem currentTask={currentTask} />
                );
            })}
            </ul>
        </div>
    );

}

export default List;