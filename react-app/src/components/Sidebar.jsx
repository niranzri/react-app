import classes from '../styles/sidebar.module.css'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'; 


function Sidebar() {
    return (
    <div className={classes.sidebar}>
       
        <NavLink to ='/'className={({ isActive }) => (isActive ? 'active' : '')}> <div className={classes.sidebarDiv}><p className={classes.sidebarText}> Home </p> </div> </NavLink>
        <div className={classes.horizontalLine}></div>
        <NavLink to ='/AboutPage'className={({ isActive }) => (isActive ? 'active' : '')}> <div className={classes.sidebarDiv}> <p className={classes.sidebarText}>About </p> </div> </NavLink>
        <div className={classes.horizontalLine}></div>
       {/* <NavLink to ='/NewTask'className={({ isActive }) => (isActive ? 'active' : '')}> <div className={classes.sidebarDiv}><p className={classes.sidebarText}> New Task </p> </div> </NavLink>*/}
    </div>
    );
}

export default Sidebar;