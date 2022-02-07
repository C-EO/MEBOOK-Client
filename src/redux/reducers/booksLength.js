const booksLength = (length = 0, action) => {
  if (action.type === "GET_ALL_BOOKS") {
    return action.payload.data.count;
  }
  if (action.type === "GET_CATEGORY_BOOKS") {
    return action.payload.data.count;
  }
  if (action.type === "CLEAR") {
    return 0;
  }
  return length;
};

export default booksLength;
