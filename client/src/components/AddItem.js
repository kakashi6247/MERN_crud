import React, { useState } from 'react';
import axios from 'axios';

const AddItem = () => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    axios.post('/api/items', { name })
      .then(res => {
        console.log(res.data);
        setName(''); // Clear input field after successful submission
      })
      .catch(err => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Add Item 1</button>
    </form>
  );
};

export default AddItem;
