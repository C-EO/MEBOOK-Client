const list = (list = [], action) => {
  if (action.type === "UPDATE_LIST") {
    return [ ...action.payload ];
  }
  return list;
};

export default list;
