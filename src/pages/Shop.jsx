import React, { useEffect, useState } from "react";
import ShopSidebar from "../components/ShopSidebar";
import ShopBooksContainer from "../components/ShopBooksContainer";
import { connect } from "react-redux";
import { getAllBooks, updateList } from "../redux/actions";
import Modal from "../components/Modal";
import BookViewModal from "../components/BookViewModal";
const mapStateToProps = (state) => state;

export default connect(mapStateToProps, { getAllBooks, updateList })(
  function Shop({ getAllBooks, categories, books, updateList }) {
    useEffect(() => {
      document.title = `MEBOOK | Shop`;
      getAllBooks({ page: 1 });
    }, []);

    useEffect(() => {
      updateList(books);
    }, [books]);

    return (
      <div id="app-shop">
        <Modal>
          <BookViewModal></BookViewModal>
        </Modal>
        <div className="container py-5">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4 col-xl-3">
              <ShopSidebar categories={categories} />
            </div>
            <div className="col-12 col-md-6 col-lg-8 col-xl-9">
              <ShopBooksContainer loadMore={getAllBooks} />
            </div>
          </div>
        </div>
      </div>
    );
  }
);
