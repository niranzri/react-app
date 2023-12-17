import React, { useState } from 'react';
import classes from '../styles/list.module.css';
import {Fragment} from 'react';
import ListItem from './ListItem.jsx';
import NewTask from '../pages/NewTask.jsx';

function List({tasks, setTasks}){

  const handleDelete = (id) => {
    const newTasks = tasks.map(task => {
        if (task.id === id) {
            return {...task, completed: true}
        }
        return task;
    });

    /*const handleDelete = (id) => {
        const newTasks = tasks.filter((task) =>{
            return task.id !== id;
        }).map(task => {
            if (task.id === id) {
                return {...task, completed: true}
            }
            return task;
        });*/
    
    setTasks(newTasks);
    }
    const [editingTask, setEditingTask] = useState(null);

const handleEdit = (id) => {
  setEditingTask(id);
};

const handleSaveEdit = (id, editedTask) => {
  const updatedTasks = tasks.map((task) =>
    task.id === id ? { ...task, task: editedTask } : task
  );
  setTasks(updatedTasks);
  setEditingTask(null);
};

    return (
        <div className={classes.toDoList}>
            <h2>Tasks to do</h2>
            <ul>
            {tasks.map((currentTask) => {
                return (
                    <Fragment key={currentTask.id}>
                    <ListItem
                      currentTask={currentTask}
                      handleDelete={handleDelete}
                      handleEdit={() => handleEdit(currentTask.id)} 
                      editingTask={editingTask}
                      handleSaveEdit={handleSaveEdit}
                      key={currentTask.id}
                    />
                  </Fragment>
                );
            })}
            </ul>
            <NewTask classname={classes.newTask} tasks={tasks} setTasks={setTasks}/>
        </div>
    );

}

export default List;