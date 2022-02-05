const user = (user = {}, action) => {
  if (action.type === "UPDATE_USER") {
    return action.payload;
  }
  return user;
};

export default user;
