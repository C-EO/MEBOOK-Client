const user = (user = {}, action) => {
  if (action.type === "UPDATE_USER") {
    return { ...user, ...action.payload };
  }
  return user;
};

export default user;
