const notification = (msg = {}, action) => {
  if (action.type.startsWith("@@")) {
    return msg;
  }
  if (action.type === "REGISTER_USER") {
    return { ...action.payload.data, data: undefined };
  }

  if (action.type === "CHECK_RESET_PASSWORD_TOKEN") {
    return msg;
  }
  if (action.type === "CHECK_ACCOUNT_VERIFICATION") {
    return msg;
  }
  if (action.type === "LOGIN_USER") {
    return { ...action.payload.data };
  }
  if (action.type === "RESEND_VERIFICATION_OTP") {
    return { ...action.payload.data };
  }
  if (action.type === "USER_RESET_PASSWORD") {
    return { ...action.payload.data };
  }
  if (action.type === "VERIFY_USER_ACCOUNT") {
    return { ...action.payload.data };
  }
  if (action.type === "USER_FORGOT_PASSWORD") {
    return action.payload;
  }
  return {};
};

export default notification;
