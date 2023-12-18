import ToDoList from '../components/ToDoList.jsx';
import '../App.css';

function DashBoard({tasks, setTasks}) {
  return (
    <div className='pageCtn'>
        <ToDoList tasks={tasks} setTasks={setTasks}/>
    </div>
  )
}
  
export default DashBoard