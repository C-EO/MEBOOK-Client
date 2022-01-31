import React, { useEffect } from "react";

export default function Cart() {
  useEffect(() => {
    document.title = "MEBOOK | Cart";
  }, []);

  return <div>Cart</div>;
}
