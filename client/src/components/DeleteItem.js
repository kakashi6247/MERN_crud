import React from 'react';
import axios from 'axios';

const DeleteItem = ({ itemId, onDelete }) => {
  const handleDelete = () => {
    axios.delete(`/api/items/${itemId}`)
      .then(() => onDelete())
      .catch(err => console.error(err));
  };

  return (
    <button onClick={handleDelete}>Delete Item</button>
  );
};

export default DeleteItem;
