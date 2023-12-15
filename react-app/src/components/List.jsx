import classes from '../styles/list.module.css';
import {Fragment} from 'react';
import ListItem from './ListItem.jsx';
import NewTask from '../pages/NewTask.jsx';


function List({tasks, setTasks}){
    const handleDelete = (id) => {
        const newTasks = tasks.filter((task) =>{
            return task.id !== id;
        }).map(task => {
            if (task.id === id) {
                return {...task, completed: true}
            }
            return task;
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
            <NewTask classname={classes.newTask} tasks={tasks} setTasks={setTasks}/>
        </div>
    );

}

export default List;