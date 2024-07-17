import React from 'react';

function VideoCard({ video, onEdit, onDelete }) {
  return (
    <div className="video-card">
      <h3>{video.title}</h3>
      <p>{video.description}</p>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${getYouTubeId(video.url)}`}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
      <button onClick={onEdit}>Editar</button>
      <button onClick={onDelete}>Eliminar</button>
    </div>
  );
}

function getYouTubeId(url) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
}

export default VideoCard;
