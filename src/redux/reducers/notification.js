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
  if (action.type === "BOOK_TO_WISHLIST") {
    return { ...action.payload.data };
  }
  if (action.type === "VERIFY_USER_ACCOUNT") {
    return { ...action.payload.data };
  }
  if (action.type === "USER_FORGOT_PASSWORD") {
    return action.payload;
  }
  if (action.type === "ADD_BOOK_TO_CART") {
    return { ...action.payload.data };
  }
  return msg;
};

export default notification;
