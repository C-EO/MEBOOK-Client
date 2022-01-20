import React, { useEffect } from "react";
import UserAuthFormArea from "../components/UserAuthFormArea";
import UserForgotPasswordForm from "../components/UserForgotPasswordForm";

export default function ForgotPassword() {
  useEffect(() => {
    document.title = "MEBOOK | Forgot Password";
  }, []);

  return (
    <>
      <UserAuthFormArea label={"Recover your password"}>
        <UserForgotPasswordForm></UserForgotPasswordForm>
      </UserAuthFormArea>
    </>
  );
}
