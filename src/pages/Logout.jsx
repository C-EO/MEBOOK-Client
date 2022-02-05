import React, { useEffect } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../redux/actions";
import LoadWrapper from "../components/LoadWrapper";
import { updateUser } from "../redux/actions";

const mapStateToProps = (state) => state;
export default connect(mapStateToProps, { logoutUser, updateUser })(
  function LogOut({ updateUser, logoutUser }) {
    useEffect(() => {
      document.title = `MEBOOK | Bye`;
      logoutUser();
      updateUser(null);
    }, []);
    return <LoadWrapper />;
  }
);
