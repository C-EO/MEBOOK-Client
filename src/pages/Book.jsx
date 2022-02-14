import React, { useEffect, useState } from "react";
import LoadWrapper from "../components/LoadWrapper";
import { useParams } from "react-router-dom";
import { getBook } from "../redux/actions";
import _404 from "../components/_404";
import { addBookToCart, addBookToWishList } from "../redux/actions";
import { connect } from "react-redux";
import "../assets/style/book-page.sass";
import { Rating } from "@mui/material";
import QuantityInput from "../components/QuantityInput";
import SubmitBtn from "../components/SubmitBtn";
import moment from "moment";
import { capitalize } from "lodash";
import LoadSpinner from "../components/LoadSpinner";
import { useNavigate } from "react-router-dom";

export default connect((state) => state, {
  addBookToCart,
  addBookToWishList,
})(function Book({ addBookToCart, addBookToWishList, user, response }) {
  const { id } = useParams();
  const [book, setbook] = useState(undefined);
  const [load, setLoad] = useState("load");
  const [quantity, setquantity] = useState(1);
  const [addToWishlistLoad, setaddToWishlistLoad] = useState(false);
  const [addToCartLoad, setaddToCartLoad] = useState(false);
  const [buyNowLoad, setbuyNowLoad] = useState(false);
  const wishList = user?.wishlist?.map((el) => el._id);
  const navigate = useNavigate();

  useEffect(() => {
    setaddToWishlistLoad(false);
    setaddToCartLoad(false);
    setbuyNowLoad(false);
  }, [response]);

  useEffect(() => {
    if (id) {
      (async () => {
        const res = await getBook(id);
        setbook(res.book || null);
      })();
    }
  }, []);

  useEffect(() => {
    if (book === undefined) {
      setLoad("load");
    } else if (book === null) {
      setLoad("404");
    } else if (book) {
      setLoad("ok");
    }
    {
    }
  }, [book]);

  if (load === "load") {
    document.title = "MEBOOK | Please wait!";
    return <LoadWrapper />;
  }
  if (load === "404") {
    return <_404 />;
  }
  if (load === "ok") {
    document.title = `MEBOOK | ${book.title}`;
    return (
      <div id="book-view-page">
        <div className="container py-5">
          <div className="row py-md-5">
            <div className="offset-lg-1 col-lg-10">
              <div className="book-view">
                <div className="container p-0">
                  <div className="row">
                    <div className="col-12 col-sm-5 col-md-6">
                      <div className="book-cover">
                        {!book.is_stock ? (
                          <span className="out-stock-badge">out of stock</span>
                        ) : null}
                        <img src={book?.cover} alt="book-cover" />
                      </div>
                    </div>
                    <div className="pt-5 pt-sm-0 col-12 col-sm-7 col-md-6">
                      <div className="book-info">
                        <h4 className="book-title">{book?.title}</h4>
                        <Rating
                          className="mb-2"
                          name="size-small"
                          readOnly
                          defaultValue={book.average_rating}
                          size="medium"
                        />
                        <p className="book-author">
                          Author : <span>{book.author}</span>
                        </p>
                        <p className="book-prices">
                          {book.discount ? (
                            <span className="book-last-price">
                              ${book.last_price.toFixed(2)}
                            </span>
                          ) : null}
                          <span className="price">
                            ${book.price.toFixed(2)}
                          </span>
                        </p>
                        <p className="book-description">{book?.description}</p>
                        {book.is_stock ? (
                          <>
                            <div className="book-actions">
                              <QuantityInput
                                className={"me-2"}
                                value={quantity}
                                min={1}
                                max={book?.quantity}
                                onChange={setquantity}
                              />
                              <SubmitBtn
                                onClick={() => {
                                  setaddToCartLoad(true);
                                  addBookToCart({
                                    bookId: book?._id,
                                    quantity: +quantity,
                                  });
                                }}
                                value={"ADD TO CART"}
                                type
                                load={addToCartLoad}
                              />
                            </div>
                            <div className="my-2 book-buy-now">
                              <SubmitBtn
                                onClick={() => {
                                  setbuyNowLoad(true);
                                  addBookToCart({
                                    bookId: book._id,
                                    quantity: 1,
                                  });
                                  setTimeout(() => {
                                    navigate("/cart");
                                  }, 1000);
                                }}
                                value={"BUY NOW"}
                                invert
                                type
                                load={buyNowLoad}
                              />
                            </div>
                          </>
                        ) : (
                          <SubmitBtn value={"OUT OF STOCK"} disabled />
                        )}

                        <div className="book-add-to-wishlist">
                          <button
                            className={`add-to-wishlist-btn`}
                            onClick={() => {
                              setaddToWishlistLoad(true);
                              addBookToWishList({ bookId: book?._id });
                            }}
                          >
                            {addToWishlistLoad ? (
                              <LoadSpinner size={"21"} />
                            ) : wishList?.includes(book._id) ? (
                              <i className="fas fa-heart"></i>
                            ) : (
                              <i className="fal fa-heart"></i>
                            )}
                          </button>
                          <span>
                            {wishList?.includes(book._id)
                              ? "Remove from wishlist"
                              : "Add to wishlist"}
                          </span>
                        </div>
                        <hr className="mb-4" />
                        <div className="book-fact my-1">
                          category :{" "}
                          <span>{capitalize(book.category.title)}</span>
                        </div>
                        <div className="book-fact my-1">
                          sub_category :{" "}
                          <span>{capitalize(book.sub_category.title)}</span>
                        </div>
                        <div className="book-fact my-1">
                          language : <span>{book.language.toUpperCase()}</span>
                        </div>
                        <div className="book-fact my-1">
                          publisher : <span>{book.publisher}</span>
                        </div>
                        <div className="book-fact my-1">
                          publication_date :{" "}
                          <span>{moment(book.publication_date).fromNow()}</span>
                        </div>
                        <div className="book-fact my-1">
                          pages_count : <span>{book.pages_count} pages</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
