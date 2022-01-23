import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { checkAccountVerificaion, resendOTP } from "../redux/actions";
import UserAuthFormArea from "../components/UserAuthFormArea";
import UserOTPForm from "../components/UserOTPForm";
import { Link, useNavigate } from "react-router-dom";
import _ from "lodash";

const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps, { checkAccountVerificaion, resendOTP })(
  function VerifyAccount({
    checkAccountVerificaion,
    response,
    notification,
    resendOTP,
  }) {
    const { userId, token } = useParams();
    const navigate = useNavigate();
    const [state, setState] = useState("loading");
    const [USER_ID, setUserId] = useState(userId);
    const [TOKEN, setToken] = useState(token);

    useEffect(() => {
      checkAccountVerificaion(USER_ID, TOKEN);
    }, [USER_ID, TOKEN, checkAccountVerificaion]);

    useEffect(() => {
      if (!_.isEmpty(response)) {
        if (response.data.select) {
          setToken(response?.data?.data?.token);
          setUserId(response?.data?.data?.userId);
        }
      }
    }, [response, TOKEN, USER_ID]);

    //
    useEffect(() => {
      if (!_.isEmpty(response)) {
        if (response.data.select) {
          navigate(`/verify-account/${USER_ID}/${TOKEN}`);
        }
      }
    }, [TOKEN]);

    useEffect(() => {
      if (notification) {
        if (notification?.msg === "your account verified successfully ✅.") {
          setTimeout(() => {
            navigate(`/`);
          }, 1000);
        }
      }
    }, [notification, navigate]);

    useEffect(() => {
      if (response.status === 200) {
        setState("ready");
      }
      if (response.status === 403 || response.status === 401) {
        setState("404");
      }
    }, [response]);

    if (state === "loading") {
      document.title = `MEBOOK | Please wait!`;
      return <>LOADING ...</>;
    }
    if (state === "404") {
      document.title = `MEBOOK | 404 Not Found!`;
      return <>404</>;
    }
    if (state === "ready") {
      document.title = `MEBOOK | Verify Your Account`;
      return (
        <UserAuthFormArea label={"Two-Step Verification"}>
          <div className="text-center d-flex flex-column">
            <i className="fal mb-3 fa-3x fa-envelope-open"></i>
            <p className="m-0">We’ve sent a verification code to:</p>
            <span>{response?.data?.user?.email}</span>
            <p className="mt-4 mb-3 fw500">Enter OTP Code Here</p>
          </div>
          <UserOTPForm userId={USER_ID} token={TOKEN}></UserOTPForm>
          <div className="form-link mt-4">
            Not received your code?{" "}
            <Link
              onClick={(e) => {
                e.preventDefault();
                resendOTP(USER_ID);
              }}
              to={"/"}
            >
              Resend code
            </Link>
          </div>
        </UserAuthFormArea>
      );
    }
  }
);
