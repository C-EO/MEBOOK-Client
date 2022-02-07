import React, { useState, useEffect } from "react";
import LoadWrapper from "./LoadWrapper";
import BookGridView from "./BookGridView";
import { connect } from "react-redux";
import { clear } from "../redux/actions";
import LoadSpinner from "./LoadSpinner";

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, { clear })(function ShopBooksContainer({
  filter_list,
  loadMore,
  clear,
  books,
  booksLength,
}) {
  useEffect(() => {
    return () => {
      clear();
    };
  }, []);

  useEffect(() => {
    setload(false);
  }, [books]);

  const [load, setload] = useState(false);

  return (
    <div id="shop-books-container">
      <div className="container p-0">
        <div className="row pt-5 pt-md-0">
          {!books?.length ? (
            <LoadWrapper />
          ) : !filter_list.length ? (
            <LoadWrapper />
          ) : (
            // <>SORRY, NO BOOKS MATCHED YOUR QUERY</>
            filter_list?.map((book) => {
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
        <div className="row justify-content-center g-0">
          {filter_list?.length && books.length !== booksLength ? (
            <button
              className="load-more-btn"
              onClick={() => {
                setload(true);
                loadMore();
              }}
            >
              {load ? <LoadSpinner size={"21"} /> : "load more"}
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
});
