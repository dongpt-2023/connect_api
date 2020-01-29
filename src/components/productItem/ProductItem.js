import React, { Component } from 'react';

class ProductItem extends Component {
  render() {
    let { product, index } = this.props
    let statusName = product.status ? "Con Hang" : "Het Hang";
    let statusProduct = product.status ? "warning" : "default";
    return (
      <tr>
        <td> {index + 1} </td>
        <td> {product.id} </td>
        <td> {product.name} </td>
        <td> {product.price} </td>
        <td>
          <span className={`label label-${statusProduct}`}> {statusName} </span>
        </td>
        <td>
          <button type="button" className="btn btn-warning">Sua</button>
          <button type="button" className="btn btn-danger">Xoa</button>
        </td>
      </tr>
    )
  }
}

export default ProductItem;
