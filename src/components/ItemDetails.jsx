import React from 'react';
import task from './Task';
import '../css/App.css'
import '../css/Footer.css'
import '../css/index.css'
import '../css/Sidebar.css'
import deleteTask from './TodoList_LastOld'

//TO DO.....
const ItemDetails = () => {

    // const deleteTask = (taskId) => {
    //     const newList = tasksToDisplay.filter((taskObj) => {
    //         return taskObj.id !== taskId;
    //     });
    //     setTaskToDisplay(newList);
    // }

    return (
    <div key={task.id} className="movie card">
      <h2> Task: {task.task} </h2>
      {/* Item details here ? */}
      <p className="condition"> Condition: 
        {task.completed ? 
          <img className="correct" src="src/Flat_tick_icon.svg" alt="correct" /> : 
          <img className="correct" src="src/x.png" alt="incorrect" />
        } 
      </p>
      <button onClick={() => { deleteTask(task.id) }}>Delete</button>
    </div>)
}

export default ItemDetails;