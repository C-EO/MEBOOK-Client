import React from "react";
import "../assets/style/checkout_input.sass";
import TextareaAutosize from "@mui/material/TextareaAutosize";

export default function CheckoutInput({
  label,
  required,
  input,
  type,
  textarea,
  inputText,
}) {
  return (
    <div className="checkout-input-field">
      <label>
        {label}
        {required ? (
          <span className="required">*</span>
        ) : (
          <span> (Optional) </span>
        )}
      </label>
      {!textarea ? (
        <input
          type={type}
          name={input.name}
          required={required}
          onChange={(event) => {
            input.onChange(event.target.value);
          }}
        />
      ) : (
        <TextareaAutosize
          name={input.name}
          maxRows={4}
          placeholder="Notes about your order, e.g. special notes for delivery"
          onChange={(event) => {
            input.onChange(event.target.value);
          }}
        />
      )}
    </div>
  );
}
