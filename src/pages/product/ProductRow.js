import React from 'react';
import classNames from 'classnames';
import './ProductRow.scss'

export const ProductRow = (props) => {
  return (
    <tr>
      <td className={classNames({'stock': !props.stocked})}>{props.name}</td>
      <td>{props.price}</td>
    </tr>
  );
}