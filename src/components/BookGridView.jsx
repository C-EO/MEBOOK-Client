import React, { useState, useEffect } from "react";
import "../assets/style/book-grid-view.sass";
import { Link } from "react-router-dom";
import LoadSpinner from "./LoadSpinner";
import {
  addBookToWishList,
  setBookView,
  addBookToCart,
} from "../redux/actions";
import { connect } from "react-redux";
import { Rating } from "@mui/material";

export default connect((state) => state, {
  addBookToWishList,
  setBookView,
  addBookToCart,
})(function BookGridView({
  book,
  addBookToWishList,
  user,
  response,
  setBookView,
  addBookToCart,
}) {
  useEffect(() => {
    setLoad(false);
    setcartLoad(false);
  }, [response]);

  const [load, setLoad] = useState(false);
  const [cartLoad, setcartLoad] = useState(false);
  const wishList = user?.wishlist?.map((el) => el._id);

  return (
    <div className="book-grid-view">
      <div className="book-cover-area">
        <div className="book-actions d-none d-md-flex">
          <button
            onClick={() => {
              setBookView(book);
            }}
          >
            <i className="fal fa-eye"></i>
          </button>
          <button
            disabled={!book.is_stock}
            onClick={() => {
              setcartLoad(true);
              addBookToCart({ bookId: book._id, quantity: 1 });
            }}
          >
            {cartLoad ? (
              <LoadSpinner size={"18"} />
            ) : (
              <i className="fal fa-shopping-bag"></i>
            )}
          </button>
        </div>
        <Link to={`/book/${book._id}`}>
          <img src={book.cover} alt="book-cover" />
        </Link>
        <button
          className={`add_wishlist_btn ${
            wishList?.includes(book._id) ? "wish_listed" : ""
          }`}
          onClick={() => {
            setLoad(true);
            addBookToWishList({ bookId: book._id });
          }}
        >
          {load ? (
            <LoadSpinner size={"18"} />
          ) : wishList?.includes(book._id) ? (
            <i className="fas fa-heart"></i>
          ) : (
            <i className="fal fa-heart"></i>
          )}
        </button>
        {!book.is_stock ? (
          <div className="out-of-stock-tag">out of stock</div>
        ) : null}
        <div className="book-tags-container">
          {book.tags
            ? book.tags.map((tag) => {
                return (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                );
              })
            : null}

          {book.discount ? (
            <span className="tag discount">{`-${book.discount}$`}</span>
          ) : null}
        </div>
      </div>
      <div className="book-info-area">
        <Rating
          name="size-small"
          readOnly
          defaultValue={book.average_rating}
          size="small"
        />

        <div className="book-author">
          <span>BY : </span>
          {book.author}
        </div>
        <Link to={`/book/${book._id}`} className="book-title">
          {book.title}
        </Link>
        <div className="book-price">
          {book.discount ? (
            <span className="book-last-price">
              ${book.last_price.toFixed(2)}
            </span>
          ) : null}
          <span className="book-current-price">${book.price.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
});
