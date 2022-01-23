import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import UserAuthFormArea from "../components/UserAuthFormArea";
import UserResetPasswordForm from "../components/UserResetPasswordForm";
import { checkResetPassToken } from "../redux/actions";
import { useParams } from "react-router-dom";

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, { checkResetPassToken })(
  function ResetPassword({ checkResetPassToken, response }) {
    const { userId, token } = useParams();
    const [state, setState] = useState("loading");

    useEffect(() => {
      checkResetPassToken(userId, token);
    }, [checkResetPassToken, userId, token]);

    useEffect(() => {
      if (response.status === 200) {
        setState("ready");
      }
      if (response.status === 400) {
        setState("404");
      }
    }, [response]);

    if (state === "loading") {
      document.title = "MEBOOK | Please wait!";
      return <>LOADING ...</>;
    }
    if (state === "404") {
      document.title = "MEBOOK | 404 Not Found";
      return <>404</>;
    }
    if (state === "ready") {
      document.title = "MEBOOK | Recover Your Password";
      return (
        <>
          <UserAuthFormArea label={"Enter your new account password"}>
            <UserResetPasswordForm
              userId={userId}
              token={token}
            ></UserResetPasswordForm>
          </UserAuthFormArea>
        </>
      );
    }
  }
);
