import api from "../../api/api";

const bookToWishlist = ({ bookId }) => {
  return async (dispatch) => {
    try {
      const res = await api.post(`/books/add_to_wishlist`, { bookId });
      dispatch({
        type: "BOOK_TO_WISHLIST",
        payload: res,
      });
    } catch (error) {
      dispatch({
        type: "BOOK_TO_WISHLIST",
        payload: error.response,
      });
    }
  };
};

export default bookToWishlist;
