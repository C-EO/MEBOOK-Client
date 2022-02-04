const response = (res = {}, action) => {
  if (action.type === "REGISTER_USER") {
    return { ...res, ...action.payload };
  }
  if (action.type === "ADD_BOOK_TO_CART") {
    return { ...res, ...action.payload };
  }
  if (action.type === "LOGIN_USER") {
    return { ...res, ...action.payload };
  }
  if (action.type === "LOGOUT_USER") {
    return { ...res, ...action.payload };
  }
  if (action.type === "BOOK_TO_WISHLIST") {
    return { ...res, ...action.payload };
  }
  if (action.type === "CHECK_ACCOUNT_VERIFICATION") {
    return { ...res, ...action.payload };
  }
  if (action.type === "CHECK_RESET_PASSWORD_TOKEN") {
    return { ...res, ...action.payload };
  }
  if (action.type === "RESEND_VERIFICATION_OTP") {
    return { ...res, ...action.payload };
  }
  if (action.type === "VERIFY_USER_ACCOUNT") {
    return { ...res, ...action.payload };
  }
  if (action.type === "USER_RESET_PASSWORD") {
    return { ...res, ...action.payload };
  }
  if (action.type === "USER_FORGOT_PASSWORD") {
    return { ...res, ...action.payload };
  }
  return res;
};

export default response;
