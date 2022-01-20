import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import UserAuthFormArea from "../components/UserAuthFormArea";
import UserRegisterForm from "../components/UserRegisterForm";
import OauthForm from "../components/OauthForm";

export default function Register() {
  useEffect(() => {
    document.title = "MEBOOK | Register";
  }, []);

  return (
    <>
      <UserAuthFormArea label={"Register for create your account"}>
        <UserRegisterForm></UserRegisterForm>
        <OauthForm label={"Or register with"} />
        <div className="form-link mb-3">
          Already have an account? <Link to={"/login"}>Log in</Link>
        </div>
      </UserAuthFormArea>
    </>
  );
}
