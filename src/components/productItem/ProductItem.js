import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class ProductItem extends Component {

  onDelete = (id) => {
      this.props.onDelete(id);
    }

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
          <Link to={`product/${product.id}/edit`} className="btn btn-warning">Sua</Link>
          <button
                type="button"
                className="btn btn-danger"
                onClick={()=>this.onDelete(product.id)}
                >Xoa</button>
        </td>
      </tr>
    )
  }
}

export default ProductItem;
