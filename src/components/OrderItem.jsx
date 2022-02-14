import React, { useState, useEffect } from "react";
import "../assets/style/order-item.sass";
import { Link } from "react-router-dom";
import moment from "moment";
import { cancelOrder } from "../redux/actions";
import { connect } from "react-redux";
import LoadSpinner from "./LoadSpinner";

export const OrderItem = ({ order, cancelOrder, response }) => {
  const [load, setload] = useState(false);
  useEffect(() => {
    setload(false);
  }, [response]);

  return (
    <div className="user-order-item py-4 py-md-2">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-6 col-lg-4 col-xl-5">
            <Link className="order-link" to={order._id}>
              {order._id}
            </Link>
          </div>
          <div className="col-12 py-2 col-md-6 col-lg-3">
            {moment(order.created_at).fromNow()}
          </div>
          <div className={`col-12 py-2 col-md-6 col-lg-2`}>
            <span className={`order-status order-${order.status}`}>
              {order.status}
            </span>
          </div>
          {order.status === "pending" ? (
            <div className="col-12 pt-3 pt-lg-0 col-md-6 col-lg-3 col-xl-2 text-lg-end">
              <button
                className="cancel-order-btn"
                onClick={() => {
                  setload(true);
                  cancelOrder({ orderId: order._id });
                }}
              >
                {load ? <LoadSpinner size={"16"} /> : "cancel"}
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => state;

const mapDispatchToProps = { cancelOrder };

export default connect(mapStateToProps, mapDispatchToProps)(OrderItem);
