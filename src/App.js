import React from 'react';
import './App.css';
import ToDo from './components/ToDo';
import ToDoHeader from './components/ToDoHeader';
import ToDoInput from './components/ToDoInput';
import Preloader from './components/Preloader';

export const ToDoContext = React.createContext();

const App = () => {
  let [tasks, setTasks] = React.useState([]);

    let submitIndex = (i) => {
      setTasks(tasks.map((elem, index) => {
        if(i === index) {
          elem.done = !elem.done;
        }
        return elem;
      }))
    }
 
  return (<div className = "wrapper">
            <div className = "todo">
              <ToDoContext.Provider value={tasks}>
                <ToDoHeader />
                <ToDoInput setTasks={setTasks} />
                <ToDo submitIndex={submitIndex} />
              </ToDoContext.Provider>
            </div>
          </div>)

}

export default App;