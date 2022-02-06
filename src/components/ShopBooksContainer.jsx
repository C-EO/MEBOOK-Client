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
}) {
  useEffect(() => {
    return () => {
      clear();
    };
  }, []);

  useEffect(() => {
    setload(false);
  }, [books]);

  let [page, setpage] = useState(2);
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
          {filter_list?.length ? (
            <button
              className="load-more-btn"
              onClick={() => {
                setload(true);
                setpage(page + 1);
                loadMore({ page });
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
