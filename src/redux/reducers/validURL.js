const validURL = (valid = null, action) => {
  if (action.type === "CHECK_ACCOUNT_VERIFICATION") {
    return action.payload;
  }
  return valid;
};

export default validURL;
