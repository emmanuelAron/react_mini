

// Dashboard.jsx
import React, { useState } from 'react';
import AddItemForm from './AddItemForm';
import Todolist from './TodoList';
import UpdateItemForm from './UpdateItemForm';

function Dashboard() {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleAddItem = (newItem) => {
    // Assuming each item has a unique identifier (id)
    const newItemObject = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    };
    setItems((prevItems) => [...prevItems, newItemObject]);
  };
  const handleUpdateItem = (itemId, updatedValue) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, value: updatedValue } : item
      )
    );
    setSelectedItem(null); // Reset selectedItem after update
  };

  const handleEditItemClick = (item) => {
    setSelectedItem(item);
  };
  return (
    <div className='dashboard'>
    <h1>TO DO LİST</h1>
    <AddItemForm onAddItem={handleAddItem} />

    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.value}{' '}
          <button onClick={() => handleEditItemClick(item)}>Edit</button>
        </li>
      ))}
    </ul>

    {selectedItem && (
      <UpdateItemForm item={selectedItem} onUpdateItem={handleUpdateItem} />
    )}

    
    <Todo />
  </div>
);
}

export default Dashboard;
