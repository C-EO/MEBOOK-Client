const books = (books = [], action) => {
  if (action.type === "GET_ALL_BOOKS") {
    return [...books, ...action.payload.data.books];
  }
  return [];
};

export default books;
