import api from "../../api/api";

const getCategoryBooks = (data) => {
  return async (dispatch) => {
    try {
      const res = await api.get(
        `/books/category/${data.id}?limit=4&page=${data.page}`
      );
      dispatch({
        type: "GET_CATEGORY_BOOKS",
        payload: res,
      });
    } catch (error) {
      dispatch({
        type: "GET_CATEGORY_BOOKS",
        payload: error.response,
      });
    }
  };
};

export default getCategoryBooks;
