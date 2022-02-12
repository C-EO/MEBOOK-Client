import api from "../../api/api";

const updateAvatar = (data) => {
  return async (dispatch) => {
    try {
      const res = await api.patch(`/auth/update_avatar`, data);
      dispatch({
        type: "UPDATE_USER_AVATAR",
        payload: res,
      });
    } catch (error) {
      dispatch({
        type: "UPDATE_USER_AVATAR",
        payload: error.response,
      });
    }
  };
};

export default updateAvatar;
