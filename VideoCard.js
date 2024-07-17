import React from 'react';
import './VideoCard.css';

function VideoCard({ video, onEdit, onDelete }) {
  // ... (código anterior)

  return (
    <div className="video-card">
      <h3>{video.title}</h3>
      <p>{video.description}</p>
      <iframe
        src={`https://www.youtube.com/embed/${getYouTubeId(video.url)}`}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
      <button className="edit" onClick={onEdit}>Editar</button>
      <button className="delete" onClick={onDelete}>Eliminar</button>
    </div>
  );
}

// ... (resto del código)

export default VideoCard;
