import React from "react";

export default function UserResetPasswordForm() {
  return (
    <div className="form-area">
      <form>
        <div className="row g-0">
          <div className="col">
            <input
              type="password"
              className="mebook-input"
              placeholder="New Password"
            />
          </div>
        </div>
        <div className="row g-0">
          <div className="col">
            <input
              type="password"
              className="mebook-input"
              placeholder="New Password Confirmation"
            />
          </div>
        </div>
        <div className="row g-0">
          <div className="col">
            <button type="submit" className="mebook-form-submit-btn">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
