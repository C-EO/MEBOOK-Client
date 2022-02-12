import React from "react";
import { connect } from "react-redux";
import EmptyOrders from "../components/EmptyOrders";

export const UserOrders = ({ user }) => {
  return <EmptyOrders />;
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(UserOrders);
