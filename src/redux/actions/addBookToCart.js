import api from "../../api/api";

const addBookToCart = (data) => {
  console.log(data);
  return async (dispatch) => {
    try {
      // const res = {};
      const res = await api.post(`/books/add_to_cart`, data);
      dispatch({
        type: "ADD_BOOK_TO_CART",
        payload: res,
      });
    } catch (error) {
      dispatch({
        type: "ADD_BOOK_TO_CART",
        payload: error.response,
      });
    }
  };
};

export default addBookToCart;
