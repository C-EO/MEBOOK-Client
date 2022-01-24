import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { withCookies } from "react-cookie";

const mapStateToProps = (state) => state;
export default withCookies(
  connect(mapStateToProps)(function Login({ cookies }) {
    const navigate = useNavigate();
    useEffect(() => {
      cookies.remove("jwt");
      navigate("/");
    }, []);
    return <></>;
  })
);
