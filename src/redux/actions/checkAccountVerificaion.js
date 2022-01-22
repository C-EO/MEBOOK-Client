import api from "../../api/api";

const checkAccountVerificaion = (userId, token) => {
  return async (dispatch) => {
    try {
      const res = await api.post(`/auth/check_acc_verify/${userId}/${token}`);
      dispatch({
        type: "CHECK_ACCOUNT_VERIFICATION",
        payload: res,
      });
    } catch (error) {
      dispatch({
        type: "CHECK_ACCOUNT_VERIFICATION",
        payload: error.response,
      });
    }
  };
};

export default checkAccountVerificaion;
