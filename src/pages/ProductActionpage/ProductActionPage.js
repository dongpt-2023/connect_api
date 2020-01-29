import React, { Component } from 'react';

import ProductList from './../../components/productList/ProductList';
import ProductItem from './../../components/productItem/ProductItem';

class ProductActionPage extends Component {
  render() {
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
       <form>
         <div class="form-group">
           <label>Name: </label>
           <input type="text" class="form-control" />
         </div>
         <div class="form-group">
           <label>Price: </label>
           <input type="number" class="form-control" />
         </div>

         <div class="form-group">
           <label>Status: </label>
         </div>
         <div class="checkbox">
           <label>
             <input type="checkbox" />
             Con hang
           </label>
         </div>
         <button type="submit" class="btn btn-primary">Luu lai</button>
       </form>
      </div>
    )
  }
}

export default ProductActionPage;
