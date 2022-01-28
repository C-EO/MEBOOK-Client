import React from "react";
import "../assets/style/shop-filter-item.sass";

export default function ShopFilterItem({ children, label }) {
  return (
    <div className="shop-filter-item">
      <label className="filter-name">{label}</label>
      {children}
    </div>
  );
}
