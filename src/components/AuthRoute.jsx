import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import Login from "../pages/Login";

export default connect((state) => state)(function AuthRoute({
  user,
  children,
  path,
}) {
  const [logged, setLogged] = useState(null);
  useEffect(() => {
    if (user && !_.isEmpty(user)) {
      setLogged(true);
    } else {
      setLogged(false);
    }
  }, [user]);

  if (logged === null) {
    return <></>;
  }
  if (logged === false) {
    return <Login redirect_to={path}></Login>;
  }
  if (logged === true) {
    return children;
  }
});
