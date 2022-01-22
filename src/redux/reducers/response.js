const response = (res = {}, action) => {
  if (action.type === "REGISTER_USER") {
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
  if (action.type === "VERIFY_USER_ACCOUNT") {
    return {
      ...res,
    };
  }
  return {};
};

export default response;
