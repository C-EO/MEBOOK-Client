import React, { useRef } from "react";
import "../assets/style/user_info_bar.sass";

export default function UserInfoBar() {
  const row = useRef();
  const bar = useRef();
  return (
    <div className="user-info-bar d-none d-md-block" ref={bar}>
      <div className="container">
        <div className="row" ref={row}>
          <div className="col">
            <p className="message">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptates natus asperiores.
            </p>
            <span className="bar-hide-btn"
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
