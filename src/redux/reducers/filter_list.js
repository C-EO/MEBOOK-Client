const list = (list = [], action) => {
  if (action.type === "UPDATE_LIST") {
    return [...action.payload];
  }
  if (action.type === "FILTER_BY_PRICE") {
    return [...action.payload];
  }
  if (action.type === "FILTER_BY_YEAR") {
    return [...action.payload];
  }
  if (action.type === "FILTER_BY_RATE") {
    return [...action.payload];
  }
  return list;
};

export default list;
