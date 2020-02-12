import React, { Component } from 'react';
import ProductItem from '../productItem/ProductItem';

class ProductList extends Component {
  render() {
    return (
      <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">List Product</h3>
          </div>
          <div className="panel-body">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Mã</th>
                  <th>Tên</th>
                  <th>Giá</th>
                  <th>Trạng thái</th>
                  <th>Hành Động</th>
                </tr>
              </thead>
              <tbody>
               {this.props.children}
              </tbody>
            </table>
          </div>
      </div>
    )
  }
}

export default ProductList;
