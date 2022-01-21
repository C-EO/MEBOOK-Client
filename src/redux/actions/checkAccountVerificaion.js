import api from "../../api/api";

const checkAccountVerificaion = (userId, token) => {
  return async (dispatch) => {
    try {
      const res = await api.post(`/auth/check/${userId}/${token}`);
      dispatch({
        type: "CHECK_ACCOUNT_VERIFICATION",
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: "CHECK_ACCOUNT_VERIFICATION",
        payload: false,
      });
    }
  };
};

export default checkAccountVerificaion;
