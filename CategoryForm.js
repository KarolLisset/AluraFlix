import React, { useState, useEffect } from 'react';
import { addCategory, updateCategory } from '../services/api';

function CategoryForm({ category, onSave }) {
  const [name, setName] = useState('');

  useEffect(() => {
    if (category) {
      setName(category.name);
    }
  }, [category]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (category) {
      await updateCategory(category.id, { name });
    } else {
      await addCategory({ name });
    }
    onSave();
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nombre de la categoría"
        required
      />
      <button type="submit">{category ? 'Actualizar' : 'Agregar'}</button>
    </form>
  );
}

export default CategoryForm;
