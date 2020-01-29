import React, { Component } from 'react';

import ProductList from './../../components/productList/ProductList';
import ProductItem from './../../components/productItem/ProductItem';

class ProductListPage extends Component {
  render() {
    let products = [];
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <button type="button" className="btn btn-default">Add product
        </button>
        <ProductList>
          {this.showProductList(products)}
        </ProductList>
      </div>
    )
  }

  showProductList(products) {
    let result = null;
    if (products.length > 0) {
      result = products.map((product, index)=> {
        return (
          <ProductItem key={index} product={product} index={index} />
        )
      })
    }
  }
}

export default ProductListPage;
