import React, { useEffect, useState } from "react";
import { reduxForm, Field } from "redux-form";
import { userResetPassword } from "../redux/actions";
import SubmitBtn from "./SubmitBtn";
import { connect } from "react-redux";

const mapStateToProps = (state) => state;

const onSubmit = (values, dispatch, { userId, token }) => {
  dispatch(userResetPassword(userId, token, values));
};

export default reduxForm({ form: "reset-password-form", onSubmit })(
  connect(mapStateToProps)(function UserResetPasswordForm({
    handleSubmit,
    response,
  }) {
    useEffect(() => {
      setLoad(false);
    }, [response]);

    const [load, setLoad] = useState(false);
    return (
      <div className="form-area">
        <form
          onSubmit={(e) => {
            setLoad(true);
            e.preventDefault();
            handleSubmit();
          }}
        >
          <div className="row g-0">
            <div className="col">
              <Field
                type="password"
                className="mebook-input"
                placeholder="New Password"
                autoComplete="new-password"
                name="newPassword"
                component="input"
                required
              />
            </div>
          </div>
          <div className="row g-0">
            <div className="col">
              <Field
                component="input"
                type="password"
                className="mebook-input"
                autoComplete="new-password"
                placeholder="New Password Confirmation"
                name="newPasswordConfirmation"
                required
              />
            </div>
          </div>
          <div className="row g-0">
            <div className="col">
              <SubmitBtn value="submit" load={load} />
            </div>
          </div>
        </form>
      </div>
    );
  })
);

// const mapStateToProps = (state, props) => {
//   return { ...state, ...props };
// };

// const onSubmit = (values, dispatch, { userId, token }) => {
//   dispatch(userResetPassword(userId, token, values));
// };

// const UserResetPasswordForm = ({ handleSubmit, response }) => {
//   const [load, setLoad] = useState(false);

//   useEffect(() => {
//     setLoad(true);
//   }, [response]);

//   return (
//     <div className="form-area">
//       <form
//         onSubmit={(e) => {
//           setLoad(true);
//           e.preventDefault();
//           handleSubmit();
//         }}
//       >
//         <div className="row g-0">
//           <div className="col">
//             <Field
//               type="password"
//               className="mebook-input"
//               placeholder="New Password"
//               autoComplete="new-password"
//               name="newPassword"
//               component="input"
//               required
//             />
//           </div>
//         </div>
//         <div className="row g-0">
//           <div className="col">
//             <Field
//               component="input"
//               type="password"
//               className="mebook-input"
//               autoComplete="new-password"
//               placeholder="New Password Confirmation"
//               name="newPasswordConfirmation"
//               required
//             />
//           </div>
//         </div>
//         <div className="row g-0">
//           <div className="col">
//             <SubmitBtn value="submit" load={load} />
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };
// export default reduxForm({ form: "reset-password-form", onSubmit })(
//   connect(mapStateToProps, { userResetPassword })(UserResetPasswordForm)
// );
