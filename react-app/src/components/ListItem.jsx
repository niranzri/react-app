import classes from '../styles/list.module.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import EditForm from './EditForm';  

function ListItem({ currentTask, handleDelete, handleEdit, editingTask, handleSaveEdit }) {
    return (
        <>
            {!currentTask.completed && (
                <li className={classes.listItem}>
                    {editingTask === currentTask.id ? (
                        <EditForm
                            taskId={currentTask.id}
                            initialTask={currentTask.task}
                            onSaveEdit={handleSaveEdit}
                        />
                    ) : (
                        <>
                            <Link key={currentTask.id} to={`/tasks/${currentTask.id}`}>
                                <p className={classes.itemTask}>{currentTask.task}</p>
                            </Link>
                            <button className={classes.btnEdit} type="button" onClick={() => handleEdit(currentTask.id)}>
                                <FontAwesomeIcon icon={faEdit} size="2xl" />
                            </button>
                            <button className={classes.btnDelete} type='button' onClick={() => handleDelete(currentTask.id)}>
                                <FontAwesomeIcon icon={faTrash} size="2xl" />
                            </button>
                        </>
                    )}
                </li>
            )}
        </>
    );
}

export default ListItem;
