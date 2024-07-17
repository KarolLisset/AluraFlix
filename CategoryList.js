import React, { useState, useEffect } from 'react';
import { getCategories, deleteCategory } from '../services/api';

function CategoryList({ onEdit }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    const data = await getCategories();
    setCategories(data);
  };

  const handleDelete = async (id) => {
    await deleteCategory(id);
    loadCategories();
  };

  return (
    <div>
      <h2>Categorías</h2>
      <ul>
        {categories.map(category => (
          <li key={category.id}>
            {category.name}
            <button onClick={() => onEdit(category)}>Editar</button>
            <button onClick={() => handleDelete(category.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryList;
