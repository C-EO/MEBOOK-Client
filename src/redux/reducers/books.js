const books = (books = [], action) => {
  if (action.type === "GET_ALL_BOOKS") {
    return [...action.payload.data.books];
  }
  return books;
};

export default books;
