import { useState } from "react";
import data from "../../data.json"
import { Link } from 'react-router-dom';

function AddItemForm() {
  const [newTask, setNewTask] = useState("");
  const [items, setItems] = useState([]);

  function addItem() {
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newTask
    };
    setItems(oldItems => [...oldItems, item]);
    setNewTask("");
  }

  function deleteItem(id) {
    const newArray = items.filter(item => item.id !== id);
    setItems(newArray);
  }

  return (
    <div className='form'>
      
      <input
        type='text'
        placeholder="add a task.."
        value={newTask}
        onChange={e => setNewTask(e.target.value)}
      />

      <button onClick={() => addItem()}>Add</button>

      <ul>
        {items.map((item,i) => (
          <li key={item.id}>
            {/* {item.value}  */}
            

             <div key={item.id} className="movie card">
                        <h2> <Link to={`/tasks/${i+1}`}> Task </Link> </h2>
                        <h2> {item.task} </h2>
                        <p className="condition">  
                        <img src="https://fontmeme.com/permalink/240213/ec2620d3b0600c5b51289ca99eb00f88.png" alt="police-anglosax-oblique" border="0" />
                        {
                        item.completed ?  
                         <img className="correct" src="images/Flat_tick_icon.svg"></img> : 
                        <img className="correct" src="images/x.png"></img> 
                        } 
                        </p>
                        {/* <button onClick={() => {deleteTask(item.id)}}>Delete</button> */}
                    </div> 





            
            
            <button onClick={() => deleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AddItemForm;
