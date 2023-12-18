
import { useState } from 'react';
import classes from '../styles/list.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave  } from '@fortawesome/free-solid-svg-icons';


function EditForm({ taskId, initialTask, onSaveEdit }) {
  const [editedTask, setEditedTask] = useState(initialTask);

  const handleInputChange = (event) => {
    setEditedTask(event.target.value);
  };

  const handleSave = () => {
    onSaveEdit(taskId, editedTask);
  };

  return (
    <>
      <label className={classes.editLabel}>
        <input className={classes.editInput}
        type="text"
        value={editedTask}
        onChange={handleInputChange}
        />
      </label>
      <button className={classes.saveBtn} type="button" onClick={handleSave}>
      <FontAwesomeIcon icon={faSave} size="2xl" />
      </button>
    </>
  );
}

export default EditForm;
