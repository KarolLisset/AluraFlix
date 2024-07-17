import React, { useState } from 'react';
import VideoList from '../Components/VideoList';
import VideoForm from '../Components/VideoForm';

function Videos() {
  const [editingVideo, setEditingVideo] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleEdit = (video) => {
    setEditingVideo(video);
    setShowForm(true);
  };

  const handleSave = () => {
    setEditingVideo(null);
    setShowForm(false);
    // Recargar la lista de videos
  };

  return (
    <div>
      <h1>Gestión de Videos</h1>
      <button onClick={() => setShowForm(true)}>Agregar Video</button>
      {showForm && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowForm(false)}>&times;</span>
            <VideoForm video={editingVideo} onSave={handleSave} />
          </div>
        </div>
      )}
      <VideoList onEdit={handleEdit} />
    </div>
  );
}

export default Videos;
