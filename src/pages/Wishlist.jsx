import React, { useEffect } from "react";

export default function Wishlist() {
  useEffect(() => {
    document.title = "MEBOOK | Wishlist";
  }, []);

  return <div>Wishlist</div>;
}
