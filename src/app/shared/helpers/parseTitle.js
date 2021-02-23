export const parseTitle = (title) => {
  const genreTitle = title[0].toUpperCase() + title.slice(1);
  if (genreTitle === 'Tvshows') {
    return 'TV Shows';
  }
  return genreTitle;
};
