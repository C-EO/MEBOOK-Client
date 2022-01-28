import React, { useEffect } from "react";
import ShopSidebar from "./ShopSidebar";
import ShopBooksContainer from "./ShopBooksContainer";
import { connect } from "react-redux";
import { getAllBooks } from "../redux/actions";

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, { getAllBooks })(function Shop({
  getAllBooks,
}) {
  useEffect(() => {
    document.title = `MEBOOK | Shop`;
    getAllBooks();
  }, []);

  return (
    <div id="app-shop">
      <div className="container py-5">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4 col-xl-3">
            <ShopSidebar />
          </div>
          <div className="col-12 col-md-6 col-lg-8 col-xl-9">
            <ShopBooksContainer />
          </div>
        </div>
      </div>
    </div>
  );
});
