const setBookView = (book) => {
  return {
    type: "SET_BOOK_VIEW",
    payload: book,
  };
};

export default setBookView;
