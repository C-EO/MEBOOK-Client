import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../assets/style/_404.sass";

export default function _404() {
  useEffect(() => {
    document.title = "MEBOOK | 404 Not Found!";
  }, []);
  return (
    <div id="_404">
      <div className="container">
        <div className="row">
          <div className="col-12 offset-sm-3 col-sm-6">
            <div className="_404_container">
              <h4 className="_404">404</h4>
              <p className="_404_message">Oops! That page can't be found.</p>
              <span>
                We're really sorry but we can't seem to find the page you were
                looking for.
              </span>
              <Link to={"/"}>
                back to homepage
                <i className="ms-3 fal fa-chevron-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
