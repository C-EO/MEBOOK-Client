import api from "../../api/api";

const loginAdmin = (data) => {
  return async (dispatch) => {
    try {
      const res = await api.post("/auth/admin_login", data, {
        withCredentials: true,
      });
      dispatch({
        type: "LOGIN_ADMIN",
        payload: res,
      });
    } catch (error) {
      dispatch({
        type: "LOGIN_ADMIN",
        payload: error.response,
      });
    }
  };
};

export default loginAdmin;
