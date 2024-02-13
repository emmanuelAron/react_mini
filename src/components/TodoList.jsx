import { useState } from "react";
import data from "../../data.json"
import { Link } from 'react-router-dom';

function TodoList(){
    
    const [ tasksToDisplay, setTasksToDisplay ] = useState(data)
    
    const deleteTask = (taskId) => {
        const newList = tasksToDisplay.filter((taskObj) => {
            return taskObj.id !== taskId;
        });
        setTasksToDisplay(newList);
    }

    return(
        
        <section className="TodoList">
            
            {tasksToDisplay.map( (taskObj , i) => {
                return(
                 //  <TaskDetails key={taskObj.id} task={taskObj} deleteTask={deleteTask} tasksToDisplay={tasksToDisplay} />
                    <div key={taskObj.id} className="movie card">
                        <h2> <Link to={`/tasks/${i+1}`}> Task </Link> </h2>
                        <h2> {taskObj.task} </h2>
                        <p className="condition">  
                        <img src="https://fontmeme.com/permalink/240213/ec2620d3b0600c5b51289ca99eb00f88.png" alt="police-anglosax-oblique" border="0" />
                        {
                        taskObj.completed ?  
                         <img className="correct" src="images/Flat_tick_icon.svg"></img> : 
                        <img className="correct" src="images/x.png"></img> 
                        } 
                        </p>
                        <button onClick={() => {deleteTask(taskObj.id)}}>Delete</button>
                    </div>
                 // <TaskDetails tasksToDisplay={taskObj.id} />
                );
            })}

        </section>
    );
}

export default TodoList;