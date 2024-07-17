import React, { useState, useEffect } from 'react';
import { getVideos, deleteVideo } from '../services/api';
import VideoCard from './VideoCard';

function VideoList({ onEdit }) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    loadVideos();
  }, []);

  const loadVideos = async () => {
    const data = await getVideos();
    setVideos(data);
  };

  const handleDelete = async (id) => {
    await deleteVideo(id);
    loadVideos();
  };

  return (
    <div>
      <h2>Videos</h2>
      <div className="video-grid">
        {videos.map(video => (
          <VideoCard
            key={video.id}
            video={video}
            onEdit={() => onEdit(video)}
            onDelete={() => handleDelete(video.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default VideoList;
