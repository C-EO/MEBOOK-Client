import React, { useRef } from "react";
import { connect } from "react-redux";
import "../assets/style/user_info_bar.sass";
import _ from "lodash";

const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps)(function UserInfoBar({ user }) {
  const row = useRef();
  const bar = useRef();
  if (!_.isEmpty(user) && !user.is_account_verified) {
    return (
      <div className="user-info-bar d-none d-md-block" ref={bar}>
        <div className="container">
          <div className="row" ref={row}>
            <div className="col">
              <p className="message">EMAIL NOT CONFIRMED</p>
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
