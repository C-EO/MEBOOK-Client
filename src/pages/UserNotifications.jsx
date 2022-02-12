import React from "react";
import { connect } from "react-redux";
import NoNotifications from "../components/NoNotifications";

export const UserNotifications = ({ user }) => {
  return <NoNotifications />;
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(UserNotifications);
