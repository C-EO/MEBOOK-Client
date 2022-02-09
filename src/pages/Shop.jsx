import React, { useEffect, useState } from "react";
import ShopSidebar from "../components/ShopSidebar";
import ShopBooksContainer from "../components/ShopBooksContainer";
import { connect } from "react-redux";
import { getAllBooks, updateList, getCategoryBooks } from "../redux/actions";
import Modal from "../components/Modal";
import BookViewModal from "../components/BookViewModal";
import { useParams } from "react-router-dom";
import _ from "lodash";
import { clear } from "../redux/actions";
import LoadWrapper from "../components/LoadWrapper";
import _404 from "../components/_404";

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, {
  getAllBooks,
  updateList,
  clear,
  getCategoryBooks,
})(function Shop({
  getAllBooks,
  categories,
  books,
  updateList,
  clear,
  getCategoryBooks,
}) {
  const [state, setState] = useState("load");
  const [category, setCategory] = useState("load");
  const [page, setpage] = useState(2);
  const { catId } = useParams();
  useEffect(() => {
    if (catId) {
      setCategory(categories?.find((el) => el.slug === catId));
    } else {
      setCategory("shop");
    }
  }, [catId, categories]);

  useEffect(() => {
    if (category === "load") {
      setState("load");
    } else if (category === undefined) {
      setState("404");
    } else if (category === "shop") {
      setState("main-shop");
    } else if (category && category !== undefined) {
      setState("category-shop");
    }
  }, [category]);

  useEffect(() => {
    clear();
    setpage(2);
    if (state === "load") {
      document.title = `MEBOOK | Please wait!`;
    } else if (category === "shop" && state === "main-shop") {
      document.title = `MEBOOK | Shop`;
      getAllBooks({ page: 1 });
    } else if (state === "category-shop") {
      if (category?._id) {
        document.title = `MEBOOK | ${category?.title}`;
        getCategoryBooks({ id: category?._id, page: 1 });
      }
    }
  }, [state, category]);

  useEffect(() => {
    updateList(books);
  }, [books]);

  if (state === "load") return <LoadWrapper />;
  else if (state === "404") return <_404 />;
  else
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
              <ShopBooksContainer
                loadMore={
                  state === "main-shop"
                    ? () => {
                        setpage(page + 1);
                        getAllBooks({ page });
                      }
                    : () => {
                        setpage(page + 1);
                        getCategoryBooks({ id: category?._id, page });
                      }
                }
              />
            </div>
          </div>
        </div>
      </div>
    );
});
