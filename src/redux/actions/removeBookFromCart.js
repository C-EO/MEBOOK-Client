import api from "../../api/api";

const removeBookFromCart = (data) => {
  // console.log(data);
  return async (dispatch) => {
    try {
      const res = await api.post(`/books/remove_from_cart`, data);
      dispatch({
        type: "REMOVE_ITEM_FROM_CART",
        payload: res,
      });
    } catch (error) {
      dispatch({
        type: "REMOVE_ITEM_FROM_CART",
        payload: error.response,
      });
    }
  };
};

export default removeBookFromCart;
