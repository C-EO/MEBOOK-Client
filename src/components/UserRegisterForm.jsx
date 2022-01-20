import React from "react";

export default function UserRegisterForm() {
  return (
    <div className="form-area">
      <form>
        <div className="row g-0">
          <div className="col-12 col-sm-6">
            <input
              type="text"
              className="mebook-input"
              placeholder="First Name"
            />
          </div>
          <div className="col-12 col-sm-6">
            <input
              type="text"
              className="mebook-input"
              placeholder="Last Name"
            />
          </div>
        </div>
        <div className="row g-0">
          <div className="col">
            <input type="email" className="mebook-input" placeholder="Email" />
          </div>
        </div>
        <div className="row g-0">
          <div className="col">
            <input
              type="password"
              className="mebook-input"
              placeholder="Password"
            />
          </div>
        </div>
        <div className="row g-0">
          <div className="col">
            <button type="submit" className="mebook-form-submit-btn">
              register
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
