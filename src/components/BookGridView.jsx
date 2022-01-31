import React from "react";
import "../assets/style/book-grid-view.sass";
import { Link } from "react-router-dom";
import { addBookToWishList } from "../redux/actions";
import { connect } from "react-redux";

export default connect((state) => state, { addBookToWishList })(
  function BookGridView({ book, addBookToWishList, user }) {
    return (
      <div className="book-grid-view">
        <div className="book-cover-area">
          <div className="book-actions">
            <button>
              <i className="fal fa-eye"></i>
            </button>
            <button>
              <i className="fal fa-shopping-bag"></i>
            </button>
          </div>
          <Link to={"/"}>
            <img src={book.cover} alt="book-cover" />
          </Link>
          <button
            className="add_wishlist_btn"
            onClick={() => {
              addBookToWishList({ bookId: book._id });
            }}
          >
            {user?.wishlist?.includes(book._id) ? (
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
