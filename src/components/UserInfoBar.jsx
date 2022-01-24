import React, { useRef, useEffect } from "react";
import { connect } from "react-redux";
import "../assets/style/user_info_bar.sass";
import { resendOTP } from "../redux/actions";
import _ from "lodash";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps, { resendOTP })(function UserInfoBar({
  user,
  resendOTP,
  response,
}) {
  let navigate = useNavigate();
  useEffect(() => {
    if (response.status === 201) {
      const { userId, token } = response.data.data;
      if (userId && token) {
        navigate(`/verify-account/${userId}/${token}`);
      }
    }
  }, [response]);

  const row = useRef();
  const bar = useRef();
  if (!_.isEmpty(user) && !user.is_account_verified) {
    return (
      <div className="user-info-bar d-none d-md-block" ref={bar}>
        <div className="container">
          <div className="row" ref={row}>
            <div className="col">
              <p className="message">
                Welcome @<span>{user.firstName}</span> your email address is not
                verified yet,{" "}
                <Link
                  to={"/"}
                  onClick={(e) => {
                    e.preventDefault();
                    resendOTP(user._id);
                  }}
                >
                  CONFIRM NOW
                </Link>
              </p>
              <span
                className="bar-hide-btn"
                onClick={() => {
                  row.current.style.height = 0;
                  setTimeout(() => {
                    bar.current.remove();
                  }, 700);
                }}
              >
                <i className="fal fa-times"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <></>;
});
