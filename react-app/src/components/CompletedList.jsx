import classes from '../styles/completedlist.module.css';
import { Fragment } from 'react';
import CompletedListItem from './CompletedListItem.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom'; 


function CompletedList({tasks, setTasks}) {
    const handleUndo = (id) => {
        /*const newTasks = tasks.filter((task) =>{
            return task.id !== id;
        }).map(task => {
            if (task.id === id) {
                return {...task, completed: false}
            }
            return task;
        });*/

        const newTasks = tasks.map(task => {
            if (task.id === id) {
                return {...task, completed: false}
            }
            return task;
        });
    
    
    setTasks(newTasks);
    }
      
    return (
        <div className={classes.completedList}>
            <h2>Tasks completed</h2>
            <ul>
            {tasks.map((currentTask) => {
                return (
                    <Fragment key={currentTask.id}>
                        <CompletedListItem currentTask={currentTask} handleUndo={handleUndo} key={currentTask.id}/>
                    </Fragment>
                );
            })}
            </ul>
            <NavLink to="/">   
                <button className={classes.btnBack}>
                <FontAwesomeIcon icon={faArrowLeft} size="2xl" />
                </button>
            </NavLink> 

        </div>
    );

}

export default CompletedList;