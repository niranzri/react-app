import classes from '../styles/sidebar.module.css'
import { NavLink } from 'react-router-dom'


function Sidebar() {
    return (
    <div className={classes.sidebar}>
        <div className={classes.sidebarDiv}><NavLink to ='/'className={({ isActive }) => (isActive ? 'active' : '')}> <p className={classes.sidebarText}> Home </p></NavLink> </div>
        <div className={classes.sidebarDiv}> <NavLink to ='/AboutPage'className={({ isActive }) => (isActive ? 'active' : '')}> <p className={classes.sidebarText}>About </p></NavLink> </div>
    </div>
    );
}

export default Sidebar;