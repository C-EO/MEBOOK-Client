const formMsg = (msg = "", action) => {
  if (action.type === "REGISTER_USER") {
    return action.payload;
  }
  if (action.type === "VERIFY_USER_ACCOUNT") {
    return action.payload;
  }
  return msg;
};

export default formMsg;
