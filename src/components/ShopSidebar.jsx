import React, { useEffect, useState } from "react";
import ShopFilterItem from "./ShopFilterItem";
import Accordion from "./Accordion";
import AccordionItem from "./AccordionItem";
import InputRange from "react-input-range";
import { Link } from "react-router-dom";
import "react-input-range/lib/css/index.css";
import {connect} from 'react-redux'
import {filterByPrice} from '../redux/actions'

export default connect(state=>state,{filterByPrice})(function ShopSidebar({ categories,books,filterByPrice }) {
  const [min, setmin] = useState(1);
  const [max, setmax] = useState(2);
  const [value, setValue] = useState({ min, max });
  const [publication_years, setPublication_years] = useState([]);


  useEffect(()=>{
    if(books?.length){
      // GET MIN AND MAX PRICES
      let prices = []
      books.map((book)=>{
        prices.push(book.price)
      })
      setmin(Math.min(...prices))
      setmax(Math.max(...prices))
      setValue({min:Math.min(...prices),max:Math.max(...prices)})

      // GET YEARS
      let allYears=[]
      books.map((book)=>{
        allYears.push( book.publication_date.slice(0,4))
      });
      setPublication_years([...new Set(allYears.sort().reverse())])
    }


  },[books])


  return (
    <div id="shop-sidebar">
      <ShopFilterItem label={"categories"}>
        <Accordion id="categories-accordion">
          {categories?.length
            ? categories?.map((cat) => {
                return (
                  <AccordionItem
                    key={cat._id}
                    parent="categories-accordion"
                    id={cat.slug}
                    label={cat.title}
                  >
                    <ul className="sub-categories-list">
                      {cat?.sub_categories?.map((sub) => {
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
          maxValue={max}
          minValue={min}
          value={value}
          onChange={(values)=>{
            setValue(values)
            console.log(values);
            filterByPrice()
            }}
          formatLabel={(value) => `${value}$`}
        />
        <span className="price-range">
          Range : {`$${value.min} - $${value.max}`}
        </span>
      </ShopFilterItem>
      {/* ////////////////////////////////////////////////////// */}
      <ShopFilterItem label={"years"}>
        <div className='py-2'>{publication_years.map((year)=>{
          return <div key={year} className='year-item'><input type='checkbox'/>
          <span>{year}</span></div>
        })}</div>
      </ShopFilterItem>
      {/* ////////////////////////////////////////////////////// */}
       <ShopFilterItem label={"ratings"}>
        <div className='py-2'>{[5,4,3,2,1].map((rate)=>{
          return <div key={rate} className='rate-item'><input type='checkbox'/>
          <span>{rate}</span></div>
        })}</div>
      </ShopFilterItem>
    </div>
  );
}
)