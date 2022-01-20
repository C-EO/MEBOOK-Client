import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import OauthForm from "../components/OauthForm";
import UserAuthFormArea from "../components/UserAuthFormArea";
import UserLoginForm from "../components/UserLoginForm";

export default function Login() {
  useEffect(() => {
    document.title = "MEBOOK | Login";
  }, []);

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
}
