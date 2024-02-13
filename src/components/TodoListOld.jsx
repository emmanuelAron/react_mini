import { useState } from "react";
import data from "../../data.json"

function TodoList() {
    const [ tasksToDisplay, setTaskDisplay ] = useState(data)
   
    const deleteTask1 = (taskId) => {
        const newList = tasksToDisplay.filter((taskObj) => {
            return taskObj.id !== taskId;
        });
        setTaskDisplay(newList);
    }

      return data.map((todolistDetails) => {
            return (
                <section key={todolistDetails.id} className = 'TodoList'>
                <div  className="todo-line">
                    <h2> Task : {todolistDetails.task} </h2>
                    <p className="condition"> Condition: 
                    {todolistDetails.completed ? <img className="correct" src="src\Flat_tick_icon.svg"></img> : <img className="correct" src="src\x.png"></img> } 
                    <button onClick={() => { deleteTask1(todolistDetails.id);}}> Delete </button>
                    </p>
                </div>
                </section>
            )
        }
        )
    }
     export default TodoList;