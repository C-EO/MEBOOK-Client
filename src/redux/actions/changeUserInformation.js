import api from "../../api/api";

const changeUserInformation = (data) => {
  return async (dispatch) => {
    try {
      const res = await api.patch("/auth/update", data);
      dispatch({
        type: "CHANGE_USER_INFORMATION",
        payload: res,
      });
    } catch (error) {
      dispatch({
        type: "CHANGE_USER_INFORMATION",
        payload: error.response,
      });
    }
  };
};

export default changeUserInformation;
