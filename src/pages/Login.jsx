import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import OauthForm from "../components/OauthForm";
import UserAuthFormArea from "../components/UserAuthFormArea";
import UserLoginForm from "../components/UserLoginForm";
import { useNavigate } from "react-router-dom";

export default connect((state) => state)(function Login({ response }) {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "MEBOOK | Login";
  }, []);

  useEffect(() => {
    if (
      response.status === 200 &&
      response.data.msg === "logged in successfully ✅."
    ) {
      navigate("/");
    }
  }, [response]);

  return (
    <>
      <UserAuthFormArea label={"Login into your account"}>
        <UserLoginForm></UserLoginForm>
        <OauthForm label={"Or login with"} />
        <div className="form-link mb-3">
          Don't have an account? <Link to={"/register"}>Register</Link>
        </div>
      </UserAuthFormArea>
    </>
  );
});
