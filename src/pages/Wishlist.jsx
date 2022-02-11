import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import EmptyWishlist from "../components/EmptyWishlist";
import WishlistItem from "../components/WishlistItem";
import "../assets/style/wishlist_page.sass";

export default connect((state) => state)(function Wishlist({ user }) {
  const [wishlist, setwishlist] = useState([]);

  useEffect(() => {
    document.title = "MEBOOK | Wishlist";
  }, []);

  useEffect(() => {
    setwishlist(user?.wishlist?.reverse());
  }, [user?.wishlist]);

  if (!user?.wishlist?.length) {
    return <EmptyWishlist />;
  }

  return (
    <div className="wishlist-items-container py-2">
      <div className="container py-5">
        <div className="row">
          <p className="wishlist-heading">WISHLIST ({user.wishlist.length})</p>
        </div>
        <div className="row">
          {wishlist?.map((item) => {
            return (
              <div className="col-12 col-lg-6 col-xl-4" key={item._id}>
                <WishlistItem item={item} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
});
