import React from 'react';
import { ToDoContext } from './../App';

const ToDoInput = (props) => {
  let tasks = React.useContext(ToDoContext);
  let [item, setItem] = React.useState('');

  return (
    <div className="todo__input">
      <input
        type="text"
        value={item}
        placeholder="Enter task..."
        onChange={(e) => setItem(e.target.value)}
        required></input>
      <button
        onClick={() => {
          if (item) {
            props.setTasks(tasks.concat({ text: item, done: false }));
          }
          setItem('');
        }}>
        Add
      </button>
    </div>
  );
};

export default ToDoInput;
