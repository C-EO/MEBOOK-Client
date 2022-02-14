import api from "../../api/api";

const cancelOrder = (data) => {
  return async (dispatch) => {
    try {
      const res = await api.post(`/orders/cancel_order`, data);
      dispatch({
        type: "CANCEL_ORDER",
        payload: res,
      });
    } catch (error) {
      dispatch({
        type: "CANCEL_ORDER",
        payload: error.response,
      });
    }
  };
};

export default cancelOrder;
