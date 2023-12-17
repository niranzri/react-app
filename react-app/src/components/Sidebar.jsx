import classes from '../styles/sidebar.module.css'
import { NavLink } from 'react-router-dom'


function Sidebar() {
    return (
    <div className={classes.sidebar}>
        <NavLink to ='/' className={({ isActive }) => (isActive ? 'active' : '')}> <div className={classes.sidebarDiv}><p className={classes.sidebarText}> Home </p> </div> </NavLink>
        <NavLink to ='/AboutPage' className={({ isActive }) => (isActive ? 'active' : '')}> <div className={classes.sidebarDiv}> <p className={classes.sidebarText}> About </p> </div> </NavLink>
        <NavLink to ='/TaskHistory' className={({ isActive }) => (isActive ? 'active' : '')}> <div className={classes.sidebarDiv}><p className={classes.sidebarText}> Task History </p> </div> </NavLink>
    </div>
    );
}

export default Sidebar;