import api from "../../api/api";

const checkResetPassToken = (userId, token) => {
  return async (dispatch) => {
    try {
      const res = await api.post(`/auth/check_reset_pass/${userId}/${token}`);
      dispatch({
        type: "CHECK_RESET_PASSWORD_TOKEN",
        payload: res,
      });
    } catch (error) {
      dispatch({
        type: "CHECK_RESET_PASSWORD_TOKEN",
        payload: error.response,
      });
    }
  };
};

export default checkResetPassToken;
