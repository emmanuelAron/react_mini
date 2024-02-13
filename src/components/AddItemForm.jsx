import { useState } from "react";


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
      <h1>TO DO LIST</h1>

      <input
        type='text'
        placeholder="add a task.."
        value={newTask}
        onChange={e => setNewTask(e.target.value)}
      />

      <button onClick={() => addItem()}>Add</button>

      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.value} <button onClick={() => deleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AddItemForm;
