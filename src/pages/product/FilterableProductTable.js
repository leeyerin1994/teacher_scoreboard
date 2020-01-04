import React from 'react';
import {SearchBar} from "./SearchBar";
import {ProductTable} from "./ProductTable";

const products = [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"},
  {category: "Notebook", price: "$333.99", stocked: true, name: "MSI"}
]

export const FilterableProductTable = (props) => {
  return (
    <div>
      <SearchBar></SearchBar>
      <ProductTable products={products}></ProductTable>
    </div>
  );
}