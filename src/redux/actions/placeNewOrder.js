import api from "../../api/api";

const placeNewOrder = (data) => {
  return async (dispatch) => {
    try {
      const res = await api.post(`/orders/new`, data);
      dispatch({
        type: "PLACE_NEW_ORDER",
        payload: res,
      });
    } catch (error) {
      dispatch({
        type: "PLACE_NEW_ORDER",
        payload: error.response,
      });
    }
  };
};

export default placeNewOrder;
