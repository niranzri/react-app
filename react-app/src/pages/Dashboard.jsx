import List from '../components/List.jsx';
import  '../App.css';


function DashBoard({tasks, setTasks}) {
  return (
    <div className='pageCtn' >
        <List tasks={tasks} setTasks={setTasks}/>
    </div>
  )
}
  
export default DashBoard