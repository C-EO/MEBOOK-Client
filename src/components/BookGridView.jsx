import React, { useState, useEffect } from "react";
import "../assets/style/book-grid-view.sass";
import { Link } from "react-router-dom";
import { addBookToWishList, setBookView } from "../redux/actions";
import { connect } from "react-redux";
import { Rating } from "@mui/material";

export default connect((state) => state, { addBookToWishList, setBookView })(
  function BookGridView({
    book,
    addBookToWishList,
    user,
    response,
    setBookView,
  }) {
    useEffect(() => {
      setLoad(false);
    }, [response]);

    const [load, setLoad] = useState(false);
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
            <button>
              <i className="fal fa-shopping-bag"></i>
            </button>
          </div>
          <Link to={`/book/${book._id}`}>
            <img src={book.cover} alt="book-cover" />
          </Link>
          <button
            className="add_wishlist_btn"
            onClick={() => {
              setLoad(true);
              addBookToWishList({ bookId: book._id });
            }}
          >
            {load ? (
              <div
                className="spinner-border"
                style={{ width: "18px", height: "18px" }}
                role="status"
              ></div>
            ) : user?.wishlist?.includes(book._id) ? (
              <i className="fas fa-heart"></i>
            ) : (
              <i className="fal fa-heart"></i>
            )}
          </button>
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
            defaultValue={Math.floor(Math.random() * 5) + 1}
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
  }
);
