import React from "react";
import "../assets/style/footer.sass";

export default function Footer() {
  return (
    <footer className="text-center text-md-start p-md-0 py-md-1">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-6">
            <p className="m-0">
              © 2022 MEBOOK. All Rights Reserved by
              <a
                rel="noreferrer"
                className="website-link"
                href="https://mmm066550.me"
                target={"_blank"}
              >
                MOUSTAPHA
              </a>
            </p>
          </div>
          <div className="col-12 col-md-6 text-md-end">
            <ul className="social-links">
              <li className="social-item ms-md-4 me-md-0 mt-md-0">
                <a
                  rel="noreferrer"
                  className="social-link"
                  href="https://github.com/mmm-066550"
                  target={"_blank"}
                  className="social-link"
                >
                  <i className="fab fa-github"></i>
                </a>
              </li>
              <li className="social-item ms-md-4 me-md-0 mt-md-0">
                <a
                  rel="noreferrer"
                  className="social-link"
                  href="https://www.facebook.com/MOUSTAPHAMAHMMOUD/"
                  target={"_blank"}
                  className="social-link"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>

              <li className="social-item ms-md-4 me-md-0 mt-md-0">
                <a
                  rel="noreferrer"
                  className="social-link"
                  href="https://www.linkedin.com/in/mmm066550/"
                  target={"_blank"}
                  className="social-link"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li className="social-item ms-md-4 me-md-0 mt-md-0">
                <a
                  rel="noreferrer"
                  className="social-link"
                  href="https://wa.me/201099617776"
                  target={"_blank"}
                  className="social-link"
                >
                  <i className="fab fa-whatsapp"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
