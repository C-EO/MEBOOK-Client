import api from "../../api/api";

const checkResetPassToken = async (userId, token) => {
  try {
    await api.post(`/auth/check_reset_pass/${userId}/${token}`);
    return true;
  } catch (error) {
    return false;
  }
};

export default checkResetPassToken;
