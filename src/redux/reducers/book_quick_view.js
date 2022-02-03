const book_quick_view = (book = {}, action) => {
  if (action.type === "SET_BOOK_VIEW") {
    return action.payload;
  }
  if (action.type === "CLEAR_BOOK_QUICK_VIEW") {
    return action.payload;
  }
  return book;
};

export default book_quick_view;
