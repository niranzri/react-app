import List from '../components/List.jsx';
import classes from '../styles/list.module.css';
import NewTask from './NewTask.jsx'; 
import  '../App.css';


function DashBoard({tasks, setTasks}) {
  return (
    <div className='pageCtn' >
        <List tasks={tasks} setTasks={setTasks}/>
        <div className={classes.newTask}>
        <NewTask tasks={tasks} setTasks={setTasks} />
        </div>
    </div>
  )
}
  
export default DashBoard