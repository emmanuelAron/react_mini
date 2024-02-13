import React from 'react'
import { useParams } from "react-router-dom";


function TaskDetails(props) {
  const { taskId } = useParams();
  const foundTask = props.tasksToDisplay.find(task => task.id === parseInt(taskId));
    console.log('props in TaskDetails: ',props)

  if (!foundTask) {
    return <div>Task not found</div>;
  }  

  return (
  
    <div key={foundTask.id} className="movie card">
      
    <h2> Task : {foundTask.task} </h2>
    <p className="condition"> Done ? 
    {
    foundTask.completed ? 
      // <img className="correct" src="src/assets/Flat_tick_icon.svg"></img> 
      <img className="correct" src="/images/Flat_tick_icon.svg"></img>
     : 
     <img className="correct" src="/images/x.png"></img> 
    } 
    </p>
    <button className='button-list' onClick={() => {deleteTask(foundTask.id)}}>Delete</button>
</div>
  )
}
export default TaskDetails;