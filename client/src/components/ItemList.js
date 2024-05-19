import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ItemList = ({ onEdit }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('/api/items')
      .then(res => setItems(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleDelete = (itemId) => {
    axios.delete(`/api/items/${itemId}`)
      .then(res => {
        console.log(res.data);
        // Remove the deleted item from the list
        setItems(items.filter(item => item._id !== itemId));
      })
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h1>Items</h1>
      <ul>
        {items.map(item => (
          <li key={item._id}>
            {item.name} 
            <button onClick={() => onEdit(item._id)}>Edit</button>
            <button onClick={() => handleDelete(item._id)}>Delete</button> {/* Call handleDelete function with itemId when button is clicked */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
