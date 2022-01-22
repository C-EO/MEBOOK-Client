import api from "../../api/api";

const verifyAccount = (userId, token, data) => {
  return async (dispatch) => {
    try {
      const res = await api.post(`/auth/verify/${userId}/${token}`, data);
      dispatch({
        type: "VERIFY_USER_ACCOUNT",
        payload: res,
      });
    } catch (error) {
      dispatch({
        type: "VERIFY_USER_ACCOUNT",
        payload: error.response,
      });
    }
  };
};

export default verifyAccount;
