const books = (books = [], action) => {
  if (action.type === "GET_ALL_BOOKS") {
    return [...books, ...action.payload.data.books];
  }
  if (action.type === "GET_CATEGORY_BOOKS") {
    return [...books, ...action.payload.data.books];
  }
  if (action.type === "GET_SUB_CATEGORY_BOOKS") {
    return [...books, ...action.payload.data.books];
  }
  if (action.type === "CLEAR") {
    return [];
  }
  return books;
};

export default books;
