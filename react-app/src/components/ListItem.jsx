
import classes from '../styles/list.module.css';
import {Fragment} from 'react';

function ListItem({currentTask}){


    return(

        <Fragment key={currentTask.id}>
                    {!currentTask.completed &&
                    <li className={classes.listItem}>   
                        <p className={classes.itemTask}>{currentTask.task}</p>
                        <button className={classes.btnTask} type='button' onClick={() => handleDelete(currentTask.id)}> Delete </button>
                    </li> }
      </Fragment>



    )


}

export default ListItem;