import classes from '../styles/sidebar.module.css'

function SideBar() {
    return (
    <div className={classes.sidebar}>
        <div className={classes.sidebar-div}> <p className={classes.sidebar-text}> Home </p> </div>
        <div className={classes.sidebar-div}> <p className={classes.sidebar-text}> About</p></div>
    </div>
    );
}

export default SideBar;