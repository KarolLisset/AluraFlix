let categories = [
  { id: 1, name: 'Música' },
  { id: 2, name: 'Tecnología' },
];

let videos = [
  { id: 1, title: 'Video 1', description: 'No sabia que videos poner', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', categoryId: 1 },
  { id: 2, title: 'Video 2', description: 'Disculpen', url: 'https://www.youtube.com/watch?v=uD4izuDMUQA', categoryId: 2 },
];

export const getCategories = () => Promise.resolve(categories);
export const addCategory = (category) => {
  const newCategory = { ...category, id: Date.now() };
  categories.push(newCategory);
  return Promise.resolve(newCategory);
};
export const updateCategory = (id, updatedCategory) => {
  categories = categories.map(c => c.id === id ? { ...c, ...updatedCategory } : c);
  return Promise.resolve(updatedCategory);
};
export const deleteCategory = (id) => {
  categories = categories.filter(c => c.id !== id);
  return Promise.resolve();
};

export const getVideos = () => Promise.resolve(videos);
export const addVideo = (video) => {
  const newVideo = { ...video, id: Date.now() };
  videos.push(newVideo);
  return Promise.resolve(newVideo);
};
export const updateVideo = (id, updatedVideo) => {
  videos = videos.map(v => v.id === id ? { ...v, ...updatedVideo } : v);
  return Promise.resolve(updatedVideo);
};
export const deleteVideo = (id) => {
  videos = videos.filter(v => v.id !== id);
  return Promise.resolve();
};
