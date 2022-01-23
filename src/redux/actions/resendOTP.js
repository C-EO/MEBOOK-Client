import api from "../../api/api";

const resendOTP = (userId) => {
  return async (dispatch) => {
    try {
      const res = await api.get(`/auth/re-verify/${userId}`);
      dispatch({
        type: "RESEND_VERIFICATION_OTP",
        payload: res,
      });
    } catch (error) {
      dispatch({
        type: "RESEND_VERIFICATION_OTP",
        payload: error.response,
      });
    }
  };
};

export default resendOTP;
