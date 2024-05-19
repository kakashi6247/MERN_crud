import React, { useState } from 'react';
import ItemList from './components/ItemList';
import AddItem from './components/AddItem';
import EditItem from './components/EditItem';


function App() {
  const [editingItem, setEditingItem] = useState(null); // State to manage the item being edited

  const handleEdit = (itemId) => {
    setEditingItem(itemId);
  };

  return (
    <div>
      <h1>MERN CRUD App</h1>
      <AddItem />
      <ItemList onEdit={handleEdit} /> {/* Pass handleEdit function as a prop */}
      {editingItem && <EditItem itemId={editingItem} />} {/* Render EditItem only when editingItem is not null */}
    </div>
  );
}

export default App;
