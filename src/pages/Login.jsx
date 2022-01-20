import React, { useEffect } from "react";
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
      </UserAuthFormArea>
    </>
  );
}
