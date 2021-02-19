export const getTrailerKey = (videos = []) =>
  videos.find((video) => video.site === 'YouTube')?.key;
