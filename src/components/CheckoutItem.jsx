import React from "react";
import { Rating } from "@mui/material";

export default function CheckoutItem({ item }) {
  return (
    <div className="row align-items-center cart-item-row my-4">
      <div className="col-8 ">
        <div className="product">
          <img
            src={item?.item?.cover}
            alt="product-img"
            className="product-img"
          />
          <div className="product-info">
            <p className="m-0 product-title">{item.item.title}</p>
            <Rating
              className={"my-2"}
              name="size-small"
              readOnly
              defaultValue={item.item.average_rating}
              size="small"
            />
            <p className="product-quantity">QTY: {item.quantity}</p>
          </div>
        </div>
      </div>
      <div className="col-3 offset-1">
        <div className="product-subtotal">${item.subtotal.toFixed(2)}</div>
      </div>
    </div>
  );
}
