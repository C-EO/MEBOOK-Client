import api from "../../api/api";

const logoutUser = () => {
  return async (dispatch) => {
    try {
      const res = await api.get("/auth/logout", {
        withCredentials: true,
      });
      dispatch({
        type: "LOGOUT_USER",
        payload: res,
      });
    } catch (error) {
      dispatch({
        type: "LOGOUT_USER",
        payload: error.response,
      });
    }
  };
};

export default logoutUser;
