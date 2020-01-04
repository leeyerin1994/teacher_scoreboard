import React from 'react';
import classNames from 'classnames';
import styles from './ProductRow.module.scss';

export const ProductRow = (props) => {
  return (
    <tr>
      {/*es6 computed property*/}
      <td className={classNames({[styles.stock]: !props.stocked})}>{props.name}</td>
      <td>{props.price}</td>
    </tr>
  );
}