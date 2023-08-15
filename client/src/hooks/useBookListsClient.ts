export const useBookListsClient = () => {
  function getAll() {
    return fetch('./api/book-lists').then((res) => res.json());
  }

  return {
    getAll,
  };
};
