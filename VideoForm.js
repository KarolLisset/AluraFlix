import React, { useState, useEffect } from 'react';
import { addVideo, updateVideo, getCategories } from '../services/api';

function VideoForm({ video, onSave }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    loadCategories();
    if (video) {
      setTitle(video.title);
      setDescription(video.description);
      setUrl(video.url);
      setCategoryId(video.categoryId);
    }
  }, [video]);

  const loadCategories = async () => {
    const data = await getCategories();
    setCategories(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const videoData = { title, description, url, categoryId };
    if (video) {
      await updateVideo(video.id, videoData);
    } else {
      await addVideo(videoData);
    }
    onSave();
    setTitle('');
    setDescription('');
    setUrl('');
    setCategoryId('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Título del video"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Descripción"
        required
      />
      <input
        type="url"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="URL del video"
        required
      />
      <select
        value={categoryId}
        onChange={(e) => setCategoryId(e.target.value)}
        required
      >
        <option value="">Selecciona una categoría</option>
        {categories.map(category => (
          <option key={category.id} value={category.id}>{category.name}</option>
        ))}
      </select>
      <button type="submit">{video ? 'Actualizar' : 'Agregar'}</button>
    </form>
  );
}

export default VideoForm;
