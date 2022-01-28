import React from "react";
import LoadWrapper from "./LoadWrapper";
import BookGridView from "./BookGridView";
import { connect } from "react-redux";

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(function ShopBooksContainer({ books }) {
  return (
    <div id="shop-books-container">
      <div className="container p-0">
        <div className="row pt-5 pt-md-0">
          {!books.length ? (
            <LoadWrapper />
          ) : (
            books.map((book) => {
              return (
                <div
                  key={book._id}
                  className="col-6 col-sm-4 col-md-6 col-lg-4 col-xl-3"
                >
                  <BookGridView book={book} />
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
});
