import React from 'react';
import { ToDoContext } from './../App';
import smile from '../assets/images/smile.svg';
let classNames = require('classnames');

const ToDo = (props) => {
  let tasks = React.useContext(ToDoContext);

  return (
    <div className="todo__content">
      {tasks.length ? (
        tasks.map((el, i) => (
          <div key={i} className="todo__item anim">
            <div className="todo__item-count">{i + 1}</div>
            <div className={classNames('todo__item-text', { ready: el.done })}>{el.text}</div>
            {el.done ? (
              <svg
                width="25"
                height="30"
                viewBox="0 0 25 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1.70398 15.8091L9.87079 24.9367L23.322 0.916748"
                  stroke="#2CE33E"
                  strokeWidth="3"
                />
              </svg>
            ) : (
              <div
                className="todo__item-button"
                onClick={() => {
                  props.submitIndex(i);
                }}></div>
            )}
          </div>
        ))
      ) : (
        <>
          <div className="todo__item-empty">↑ Empty... Add the first task ↑</div>
          <img className="todo__item-smile" src={smile} alt="Smile" />
        </>
      )}
    </div>
  );
};

export default ToDo;
