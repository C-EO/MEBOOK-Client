import api from "../../api/api";

const changeUserPassword = (data) => {
  return async (dispatch) => {
    try {
      const res = await api.patch("/auth/change-password", data);
      dispatch({
        type: "CHANGE_USER_PASSWORD",
        payload: res,
      });
    } catch (error) {
      dispatch({
        type: "CHANGE_USER_PASSWORD",
        payload: error.response,
      });
    }
  };
};

export default changeUserPassword;
