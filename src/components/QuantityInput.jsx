import React from "react";
import "../assets/style/quantity-input.sass";

export default function QuantityInput({
  onChange,
  value,
  min,
  max,
  className,
}) {
  return (
    <div className={className + " quantity-input-field"}>
      <button
        className="sub-btn quantity-btn"
        onClick={
          value > min
            ? () => {
                onChange(+value - +1);
              }
            : null
        }
      >
        <i className="fal fa-minus"></i>
      </button>

      <input
        className="quantity-input"
        type="number"
        inputMode="numeric"
        min={0}
        value={value}
        onChange={(e) => {
          onChange(+e.target.value);
        }}
      />
      <button
        className="add-btn quantity-btn"
        onClick={
          value < max
            ? () => {
                onChange(+value + +1);
              }
            : null
        }
      >
        <i className="fal fa-plus"></i>
      </button>
    </div>
  );
}
