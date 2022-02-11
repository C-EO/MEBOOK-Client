import api from "../../api/api";

const getSubCategoryBooks = (data) => {
  return async (dispatch) => {
    try {
      const res = await api.get(
        `/books/sub_category/${data.id}?limit=4&page=${data.page}`
      );
      dispatch({
        type: "GET_SUB_CATEGORY_BOOKS",
        payload: res,
      });
    } catch (error) {
      dispatch({
        type: "GET_SUB_CATEGORY_BOOKS",
        payload: error.response,
      });
    }
  };
};

export default getSubCategoryBooks;
