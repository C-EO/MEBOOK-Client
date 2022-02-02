const categories = (categories = [], action) => {
  if (action.type === "GET_ALL_CATEGORIES") {
    return [...action.payload.data.categories];
  }
  return categories;
};

export default categories;
