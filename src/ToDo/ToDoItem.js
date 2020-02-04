import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import Context from '../context';

function ToDoItem({ todo, index, onChange }) {
  const {removeToDo} = useContext(Context);
  const classes = [];

  if (todo.completed) {
    classes.push('done');
  }

  return (
    <li>
      <label className={classes.join('')}>
        <input
          className="checkbox"
          type="checkbox"
          onChange={() => onChange(todo.id)}
          checked = {todo.completed}
        ></input>
        <strong>{ index + 1 }</strong>
        { todo.title }
      </label>
      <button className="button" onClick={() => removeToDo(todo.id)}>&times;</button>
    </li>
  );
}

ToDoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired
}

export default ToDoItem;
