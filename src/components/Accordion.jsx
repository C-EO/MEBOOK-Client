import React from "react";
import "../assets/style/accordion.sass";

export default function Accordion({ id, children }) {
  return (
    <div className="accordion" id={id}>
      {children}
    </div>
  );
}
