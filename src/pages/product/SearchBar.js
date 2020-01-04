import React from 'react';

export const SearchBar = (props) => {
  return (
    <div>
      <div>
        <input placeholder="Search..." value={props.keyword}
               onChange={(e) => props.setKeyword(e.target.value)}></input><br />
        <input type="checkbox" ></input>Only show products in stock
      </div>
    </div>
  );
}