import React from 'react';

export const SearchBar = (props) => {
  return (
    <div>
      <div>
        <input placeholder="Search..."></input><br />
        <input type="checkbox" ></input>Only show products in stock
      </div>
    </div>
  );
}