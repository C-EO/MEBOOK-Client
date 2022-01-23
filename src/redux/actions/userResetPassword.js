import api from "../../api/api";

const userResetPassword = (userId, token, data) => {
  return async (dispatch) => {
    try {
      const res = await api.post(
        `/auth/reset-password/${userId}/${token}`,
        data
      );
      dispatch({
        type: "USER_RESET_PASSWORD",
        payload: res,
      });
    } catch (error) {
      dispatch({
        type: "USER_RESET_PASSWORD",
        payload: error.response,
      });
    }
  };
};

export default userResetPassword;
