import api from "../../api/api";

const loginUser = (data) => {
  return async (dispatch) => {
    try {
      const res = await api.post("/auth/login", data, {
        withCredentials: true,
      });
      dispatch({
        type: "LOGIN_USER",
        payload: res,
      });
    } catch (error) {
      dispatch({
        type: "LOGIN_USER",
        payload: error.response,
      });
    }
  };
};

export default loginUser;
