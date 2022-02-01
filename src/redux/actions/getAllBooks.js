import api from "../../api/api";

const getAllBooks = (data) => {
  return async (dispatch) => {
    try {
      const res = await api.get(`/books/all?limit=4&page=${data.page}`);
      dispatch({
        type: "GET_ALL_BOOKS",
        payload: res,
      });
    } catch (error) {
      dispatch({
        type: "GET_ALL_BOOKS",
        payload: error.response,
      });
    }
  };
};

export default getAllBooks;
