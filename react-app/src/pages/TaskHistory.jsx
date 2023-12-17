import CompletedList from '../components/CompletedList.jsx';
import '../App.css';

function TaskHistory({tasks, setTasks}) {
  return (
    <div className='pageCtn'>
        <CompletedList tasks={tasks} setTasks={setTasks}/>
    </div>
  )
}
  
export default TaskHistory;