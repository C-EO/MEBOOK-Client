const notification = (msg = {}, action) => {
  if (action.type === "REGISTER_USER") {
    return { ...action.payload.data };
  }
  if (action.type === "LOGIN_USER") {
    return { ...action.payload.data };
  }
  if (action.type === "LOGOUT_USER") {
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
  return msg;
};

export default notification;
