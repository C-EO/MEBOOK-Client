import React, { useEffect } from "react";
import UserAuthFormArea from "../components/UserAuthFormArea";
import UserResetPasswordForm from "../components/UserResetPasswordForm";

export default function ResetPassword() {
  useEffect(() => {
    document.title = "MEBOOK | Recover Your Password";
  }, []);

  return (
    <>
      <UserAuthFormArea label={"Enter your new account password"}>
        <UserResetPasswordForm></UserResetPasswordForm>
      </UserAuthFormArea>
    </>
  );
}
