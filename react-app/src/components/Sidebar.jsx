import classes from '../styles/sidebar.module.css'

function Sidebar() {
    return (
    <div className={classes.sidebar}>
        <div className={classes.sidebarDiv}> <p className={classes.sidebarText}> Home </p> </div>
        <div className={classes.sidebarDiv}> <p className={classes.sidebarText}> About</p> </div>
    </div>
    );
}

export default Sidebar;