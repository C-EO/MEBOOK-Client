import React, { useEffect } from "react";
import UserAuthFormArea from "../components/UserAuthFormArea";
import UserRegisterForm from "../components/UserRegisterForm";

export default function Register() {
  useEffect(() => {
    document.title = "MEBOOK | Register";
  }, []);

  return (
    <>
      <UserAuthFormArea label={"Register for create your account"}>
        <UserRegisterForm></UserRegisterForm>
      </UserAuthFormArea>
    </>
  );
}
