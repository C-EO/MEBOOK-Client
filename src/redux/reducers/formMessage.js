const formMsg = (msg = "", action) => {
  if (action.type === "REGISTER_USER") {
    return action.payload;
  }
  return msg;
};

export default formMsg;
