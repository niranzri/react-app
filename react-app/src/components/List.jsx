
import tasksFromJson from '../assets/tasks.json';
import { useState } from 'react';

import classes from '../styles/list.module.css';
import {Fragment} from 'react';
import ListItem from './ListItem.jsx';

//<button onClick={() => clickToDelete()} className="btn-delete"></button>
function List({tasks}){
    console.log(tasks)
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
                        <ListItem currentTask={currentTask} handleDelete={handleDelete} key={currentTask.id}/>
                    </Fragment>
                );
            })}
            </ul>
        </div>
    );

}

export default List;