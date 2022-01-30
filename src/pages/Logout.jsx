import React, { useEffect } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../redux/actions";
import LoadWrapper from "../components/LoadWrapper";
import { reactLocalStorage } from "reactjs-localstorage";
import { updateUser } from "../redux/actions";

const mapStateToProps = (state) => state;
export default connect(mapStateToProps, { logoutUser, updateUser })(
  function LogOut({ updateUser, logoutUser }) {
    useEffect(() => {
      logoutUser();
      document.title = `MEBOOK | Bye`;
      reactLocalStorage.setObject("user", {});
      updateUser({});
    }, []);
    return <LoadWrapper />;
  }
);
