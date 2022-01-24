import React, { useEffect } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../redux/actions";
import { useNavigate } from "react-router-dom";
import { useCookies, withCookies } from "react-cookie";

const mapStateToProps = (state) => state;
export default withCookies(
  connect(mapStateToProps, { logoutUser })(function Login({
    logoutUser,
    cookies,
  }) {
    const navigate = useNavigate();
    useEffect(() => {
      logoutUser();
      navigate("/");
      cookies.remove("jwt");
    }, []);

    return <></>;
  })
);
