import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import UserAuthFormArea from "../components/UserAuthFormArea";
import UserResetPasswordForm from "../components/UserResetPasswordForm";
import { checkResetPassToken } from "../redux/actions";
import { useParams } from "react-router-dom";
import P_404 from "../components/_404";
import LoadWrapper from "../components/LoadWrapper";
import _ from "lodash";

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(function ResetPassword({ response }) {
  const { userId, token } = useParams();
  const [valid, setValid] = useState(null);

  useEffect(() => {
    (async () => {
      if (userId && token) {
        setValid(await checkResetPassToken(userId, token));
      }
    })();
  }, [userId, token]);

  if (valid === null) {
    return <LoadWrapper />;
  }
  if (valid === false) {
    return <P_404 />;
  }
  if (valid === true) {
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
});
