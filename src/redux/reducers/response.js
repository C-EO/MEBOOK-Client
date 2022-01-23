const response = (res = {}, action) => {
  if (action.type.startsWith("@@")) {
    return res;
  }
  if (action.type === "REGISTER_USER") {
    return {
      ...action.payload,
      config: undefined,
      headers: undefined,
      request: undefined,
    };
  }
  if (action.type === "LOGIN_USER") {
    return {
      ...action.payload,
      config: undefined,
      headers: undefined,
      request: undefined,
    };
  }
  if (action.type === "CHECK_ACCOUNT_VERIFICATION") {
    return {
      ...action.payload,
      config: undefined,
      headers: undefined,
      request: undefined,
    };
  }
  if (action.type === "CHECK_RESET_PASSWORD_TOKEN") {
    return {
      ...action.payload,
      config: undefined,
      headers: undefined,
      request: undefined,
    };
  }
  if (action.type === "RESEND_VERIFICATION_OTP") {
    return {
      ...action.payload,
      config: undefined,
      headers: undefined,
      request: undefined,
    };
  }
  if (action.type === "VERIFY_USER_ACCOUNT") {
    return {
      ...res,
    };
  }
  if (action.type === "USER_RESET_PASSWORD") {
    return {
      ...res,
    };
  }
  return {};
};

export default response;
