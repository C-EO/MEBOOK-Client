import api from "../../api/api";

const forgotPassword = (data) => {
  return async (dispatch) => {
    try {
      const res = await api.post("/auth/forgot-password", data, {
        withCredentials: true,
      });
      dispatch({
        type: "USER_FORGOT_PASSWORD",
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: "USER_FORGOT_PASSWORD",
        payload: error.response.data,
      });
    }
  };
};

export default forgotPassword;
