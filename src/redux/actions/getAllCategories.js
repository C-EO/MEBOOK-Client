import api from "../../api/api";

const getAllCategories = () => {
  return async (dispatch) => {
    try {
      const res = await api.get(`/category/all`);
      dispatch({
        type: "GET_ALL_CATEGORIES",
        payload: res,
      });
    } catch (error) {
      dispatch({
        type: "GET_ALL_CATEGORIES",
        payload: error.response,
      });
    }
  };
};

export default getAllCategories;
