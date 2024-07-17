import React, { useState } from 'react';
import CategoryList from '../Components/CategoryList';
import CategoryForm from '../Components/CategoryForm';

function Categories() {
  const [editingCategory, setEditingCategory] = useState(null);

  const handleEdit = (category) => {
    setEditingCategory(category);
  };

  const handleSave = () => {
    setEditingCategory(null);
    // Recargar la lista de categorías
  };

  return (
    <div>
      <h1>Gestión de Categorías</h1>
      <CategoryForm category={editingCategory} onSave={handleSave} />
      <CategoryList onEdit={handleEdit} />
    </div>
  );
}

export default Categories;
