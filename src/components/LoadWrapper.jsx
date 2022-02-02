import React, { useEffect } from "react";
import "../assets/style/load_wrapper.sass";
import icon from "../assets/img/brand/icon192.svg";
import logo from "../assets/img/brand/logo128.svg";

export default function LoadWrapper() {
  return (
    <div id="load_wrapper">
      <img
        className="load-rotate-icon my-2"
        src={icon}
        width={100}
        alt="icon"
      />
      <img src={logo} width={200} alt="logo" />
    </div>
  );
}
