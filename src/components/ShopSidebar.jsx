import React, { useEffect, useState } from "react";
import ShopFilterItem from "./ShopFilterItem";
import Accordion from "./Accordion";
import AccordionItem from "./AccordionItem";
import api from "../api/api";
import InputRange from "react-input-range";
import { Link } from "react-router-dom";
import "react-input-range/lib/css/index.css";

export default function ShopSidebar() {
  const [categories, setCategories] = useState([]);
  const [value, setValue] = useState({ min: 1, max: 100 });
  useEffect(() => {
    (async () => {
      const res = await api.get("/category/all");
      setCategories(res.data.categories);
    })();
  }, []);

  return (
    <div id="shop-sidebar">
      <ShopFilterItem label={"categories"}>
        <Accordion id="categories-accordion">
          {categories.length
            ? categories.map((cat) => {
                return (
                  <AccordionItem
                    key={cat._id}
                    parent="categories-accordion"
                    id={cat.slug}
                    label={cat.title}
                  >
                    <ul className="sub-categories-list">
                      {cat.sub_categories.map((sub) => {
                        return (
                          <li key={sub._id} className="sub-category-item">
                            <Link
                              to={`category/${cat.slug}/${sub.slug}`}
                              className="sub-category-item"
                            >
                              {sub.title}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </AccordionItem>
                );
              })
            : null}
        </Accordion>
      </ShopFilterItem>
      {/* ////////////////////////////////////////////////////// */}
      <ShopFilterItem label={"price"}>
        <InputRange
          maxValue={100}
          minValue={1}
          value={value}
          onChange={(values) => setValue(values)}
          formatLabel={(value) => `${value}$`}
        />
        <span className="price-range">
          Range : {`$${value.min} - $${value.max}`}
        </span>
      </ShopFilterItem>
    </div>
  );
}
