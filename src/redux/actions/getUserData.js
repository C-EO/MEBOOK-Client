import api from "../../api/api";

const getUserData = () => {
  return async (dispatch) => {
    try {
      const res = await api.get("/auth/current_user");
      dispatch({
        type: "GET_CURRENT_USER_DATA",
        payload: res,
      });
      return true;
    } catch (error) {
      return false;
    }
  };
};

export default getUserData;
