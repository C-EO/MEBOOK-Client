const notification = (msg = {}, action) => {
  if (action.type === "REGISTER_USER") {
    return { ...action.payload.data, data: undefined };
  }
  if (action.type.startsWith("@@")) {
    return msg;
  }
  if (action.type === "CHECK_ACCOUNT_VERIFICATION") {
    return msg;
  }
  if (action.type === "LOGIN_USER") {
    return { ...action.payload.data };
  }
  if (action.type === "VERIFY_USER_ACCOUNT") {
    return { ...action.payload.data };
  }
  // if (action.type === "USER_FORGOT_PASSWORD") {
  //   return action.payload;
  // }
  return {};
};

export default notification;
