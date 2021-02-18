/* eslint-disable no-param-reassign */
export const handleIntersectionObserver = ({
  loadingApi,
  setPageNumber,
  hasMore,
  observer,
  lastItem,
}) => {
  if (loadingApi) return;
  observer.current = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && hasMore) {
      setPageNumber((prevsPageNum) => prevsPageNum + 1);
    }
  });
  observer.current.observe(lastItem.current);
};
