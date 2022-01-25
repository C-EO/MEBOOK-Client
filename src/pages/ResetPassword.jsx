import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import UserAuthFormArea from "../components/UserAuthFormArea";
import UserResetPasswordForm from "../components/UserResetPasswordForm";
import { checkResetPassToken } from "../redux/actions";
import { useParams } from "react-router-dom";
import P_404 from "../components/_404";
import LoadWrapper from "../components/LoadWrapper";

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
      if (response.status === 403) {
        setState("404");
      }
    }, [response]);

    if (state === "loading") {
      return <LoadWrapper />;
    }
    if (state === "404") {
      return <P_404 />;
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
