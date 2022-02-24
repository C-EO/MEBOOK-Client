import api from "../../api/api";

const deleteUser = (data) => {
  return async (dispatch) => {
    try {
      const res = await api.post("/auth/delete", data);
      dispatch({
        type: "DELETE_USER",
        payload: res,
      });
    } catch (error) {
      dispatch({
        type: "DELETE_USER",
        payload: error.response,
      });
    }
  };
};

export default deleteUser;
