import { useState } from "react";
import data from "../../data.json"
import Task from "./Task.jsx"

function TodoList(){
    const [ tasksToDisplay, setTaskToDisplay ] = useState(data)
    let task = "";
    //move deleteTask ?
    const deleteTask = (taskId) => {
        const newList = tasksToDisplay.filter((taskObj) => {
            return taskObj.id !== taskId;
        });
        setTaskToDisplay(newList);
    }

    return(
        <section className="TodoList">
            {tasksToDisplay.map( (taskObj) => {
                return(
                    <Task 
                    key={taskObj.id} 
                    task={taskObj} 
                    deleteTask={deleteTask} 
                    />
                    
                );
            })}

        </section>
    );
}

export default TodoList;