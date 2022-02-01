import React, { useEffect, useState } from "react";
import ShopSidebar from "./ShopSidebar";
import ShopBooksContainer from "./ShopBooksContainer";
import { connect } from "react-redux";
import { getAllBooks } from "../redux/actions";
import api from "../api/api";

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, { getAllBooks })(function Shop({
  getAllBooks,
}) {
  const [categories, setCategories] = useState([]);
  const [min] = useState(1);
  const [max] = useState(100);

  useEffect(() => {
    document.title = `MEBOOK | Shop`;
    getAllBooks({ page: 1 });
    (async () => {
      const res = await api.get("/category/all");
      setCategories(res.data.categories);
    })();
  }, []);

  return (
    <div id="app-shop">
      <div className="container py-5">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4 col-xl-3">
            <ShopSidebar categories={categories} min={min} max={max} />
          </div>
          <div className="col-12 col-md-6 col-lg-8 col-xl-9">
            <ShopBooksContainer loadMore={getAllBooks} />
          </div>
        </div>
      </div>
    </div>
  );
});
