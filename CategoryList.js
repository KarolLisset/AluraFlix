import React, { useState, useEffect } from 'react';
import { getCategories, deleteCategory } from '../services/api';
import './CategoryList.css';

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

  return (
    <div className="category-list">
      <h2>Categorías</h2>
      {categories.map(category => (
        <div key={category.id} className="category-item">
          <span>{category.name}</span>
          <div>
            <button className="edit" onClick={() => onEdit(category)}>Editar</button>
            <button className="delete" onClick={() => handleDelete(category.id)}>Eliminar</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CategoryList;
