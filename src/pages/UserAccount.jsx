import React from "react";
import "../assets/style/user-account-page.sass";
import UserUpdateInfo from "../components/UserUpdateInfo";
import UserUpdatePassword from "../components/UserUpdatePassword";
import UserDeleteAccount from "../components/UserDeleteAccount";

export default function UserAccount() {
  return (
    <div id="user-account-page-area">
      <div className="mb-5 update-user-info-form-container">
        <h6 className="form-label py-3 px-3">Update user information</h6>
        <UserUpdateInfo />
      </div>
      <div className="mb-5 update-user-password-form-container">
        <h6 className="form-label py-3 px-3">Update user password</h6>
        <UserUpdatePassword />
      </div>
      <div className="mb-5 delete-user-form-container">
        <h6 className="text-danger form-label py-3 px-3">Delete account</h6>
        <UserDeleteAccount />
      </div>
    </div>
  );
}
