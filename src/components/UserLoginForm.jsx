import React from "react";

export default function UserLoginForm() {
  return (
    <div className="form-area">
      <form>
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
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
