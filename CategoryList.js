import React, { useState, useEffect } from 'react';
import { getCategories, deleteCategory } from '../services/api';
import './CategoryList.css';

function CategoryList({ onEdit }) {
  // ... (código anterior)

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
