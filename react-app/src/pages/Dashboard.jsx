import List from '../components/List.jsx';
import  '../App.css';


function DashBoard({tasks}) {
  return (
    <div className='pageCtn' >
        <List tasks={tasks}/>
    </div>
  )
}
  
export default DashBoard