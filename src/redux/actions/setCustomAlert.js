const setCustomAlert = (status, msg) => {
  return {
    type: "SET_CUSTOM_ALERT",
    payload: {
      status,
      msg,
    },
  };
};

export default setCustomAlert;
