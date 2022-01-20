import api from "../../api/api";

const registerUser = (data) => {
  return async (dispatch) => {
    try {
      const res = await api.post("/auth/register", data);
      dispatch({
        type: "REGISTER_USER",
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: "REGISTER_USER",
        payload: error.response.data,
      });
    }
  };
};

export default registerUser;
