import React from 'react';
import _ from 'lodash';
import {ProductCategoryRow} from "./ProductCategoryRow";
import {ProductRow} from "./ProductRow";

export const ProductTable = (props) => {
  const categoryList = [];
  const category = _.groupBy(props.products, 'category');
  console.log(category);
  for (let key in category) { // 카테고리별로 2번 루핑
    // 카테고리 컴포넌트를 생성
    categoryList.push(<ProductCategoryRow category={key}></ProductCategoryRow>);
    // row 컴포넌트를 생성: 배열로 루핑
    category[key].forEach(item =>
      categoryList.push(<ProductRow name={item.name} price={item.price}
                                    stocked={item.stocked} key={item.nam}></ProductRow>));
  }
  return (
    <table>
      <thead>
      <tr>
        <th>Name</th>
        <th>Price</th>
      </tr>
      </thead>
      <tbody>
      {
        categoryList
      }
      </tbody>
    </table>
  );
}