const user = (user = {}, action) => {
  if (action.type === "REGISTER_USER") {
    return { ...user, ...action.payload.data.user };
  }
  return user;
};

export default user;
