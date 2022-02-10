import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import Login from "../pages/Login";
import LoadWrapper from "./LoadWrapper";

export default connect((state) => state)(function AuthRoute({
  user,
  children,
  path,
  restrict_to,
  label,
}) {
  const [logged, setLogged] = useState(null);
  useEffect(() => {
    if (!user) {
      setLogged(false);
    } else if (user) {
      if (_.isEmpty(user)) {
        setLogged(null);
      } else if (!_.isEmpty(user) && restrict_to.includes(user.role)) {
        setLogged(true);
      } else if (!restrict_to.includes(user.role)) {
        setLogged(false);
      }
    }
  }, [user]);

  if (logged === null) {
    return <LoadWrapper />;
  }
  if (logged === false) {
    return (
      <Login label={label} restrict_to={restrict_to} redirect_to={path}></Login>
    );
  }
  if (logged === true) {
    return children;
  }
});
