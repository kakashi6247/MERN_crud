import React, { useState } from 'react';
import axios from 'axios';

const EditItem = ({ itemId }) => {
  const [name, setName] = useState('');

  const handleUpdate = () => {
    axios.put(`/api/items/${itemId}`, { name })
      .then(res => console.log(res.data))
      .catch(err => console.error(err));
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleUpdate}>Update Item</button>
    </div>
  );
};

export default EditItem;
