import React from "react";
import { connect } from "react-redux";
import EmptyOrders from "../components/EmptyOrders";
import OrderItem from "../components/OrderItem";

export const UserOrders = ({ user }) => {
  if (!user?.orders?.length) return <EmptyOrders />;
  else {
    return (
      <>
        <div className="orders-wrapper">
          <div className="orders-info-top d-none d-xl-flex">
            <div className="container py-4">
              <div className="row">
                <div className="col-5">ID</div>
                <div className="col-3">Date</div>
                <div className="col-2 text-center">Status</div>
              </div>
            </div>
          </div>
          <div className="orders-container">
            {user.orders.map((order) => {
              return <OrderItem order={order} key={order._id} />;
            })}
          </div>
        </div>
      </>
    );
  }
};

const mapStateToProps = (state) => state;

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(UserOrders);
