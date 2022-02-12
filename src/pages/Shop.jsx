import React, { useEffect, useState } from "react";
import ShopSidebar from "../components/ShopSidebar";
import ShopBooksContainer from "../components/ShopBooksContainer";
import { connect } from "react-redux";
import {
  getAllBooks,
  updateList,
  getCategoryBooks,
  getSubCategoryBooks,
} from "../redux/actions";
import Modal from "../components/Modal";
import BookViewModal from "../components/BookViewModal";
import { useParams } from "react-router-dom";
import _, { upperFirst } from "lodash";
import { clear } from "../redux/actions";
import LoadWrapper from "../components/LoadWrapper";
import _404 from "../components/_404";

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, {
  getAllBooks,
  updateList,
  clear,
  getCategoryBooks,
  getSubCategoryBooks,
})(function Shop({
  getAllBooks,
  categories,
  books,
  updateList,
  clear,
  getCategoryBooks,
  getSubCategoryBooks,
}) {
  const [state, setState] = useState("load");
  const [category, setCategory] = useState("load");
  const [page, setpage] = useState(2);
  const { catId, subCatId } = useParams();
  useEffect(() => {
    if (subCatId) {
      if (_.isEmpty(categories)) {
        setCategory("load");
      } else {
        const mainCategory = categories
          ?.find((el) => el.slug === catId)
          .sub_categories.find((el) => el.slug === subCatId);
        setCategory(mainCategory);
      }
    } else {
      if (!catId) {
        setCategory("shop");
      } else {
        if (_.isEmpty(categories)) {
          setCategory("load");
        } else {
          setCategory(categories?.find((el) => el.slug === catId));
        }
      }
    }
  }, [categories, catId, subCatId]);

  useEffect(() => {
    if (category === "load") {
      setState("load");
    } else if (category === "shop") {
      setState("main-shop");
    } else if (category && category !== undefined) {
      if (!subCatId) setState("category-shop");
      else if (subCatId) setState("sub_category-shop");
    } else if (category === undefined) {
      setState("404");
    }
  }, [category, categories]);

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
        document.title = `MEBOOK | ${upperFirst(category?.title)}`;
        getCategoryBooks({ id: category?._id, page: 1 });
      }
    } else if (state === "sub_category-shop") {
      if (category?._id) {
        document.title = `MEBOOK | ${upperFirst(category?.title)}`;
        getSubCategoryBooks({ id: category?._id, page: 1 });
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
          <div className="row py-4">
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
