
import tasks from '../assets/tasks.json';
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const[tasks, setTasks] = useState(tasks);

function Task(){

return (

<div>
{tasks.map((currentTask) => {
return(
 
    <ul>
       <li>
         <p>{currentTask.task}</p> 
         <button>delete</button> 
         <button onClick={() => clickToDelete()} className="btn-delete"></button>
        </li> 
        
    </ul>
   
)
})};


</div>


)


}