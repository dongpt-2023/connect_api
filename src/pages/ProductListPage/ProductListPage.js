import React, { Component } from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import ProductList from './../../components/productList/ProductList';
import ProductItem from './../../components/productItem/ProductItem';
import CallApi from './../../utils/apiCaller';

class ProductListPage extends Component {

  constructor(props){
    super(props);
    this.state = {
      products: []
    }
  }

  render() {
    // let {products} = this.props;
    let  {products} = this.state;
    // let products = [];
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <Link to={'/product/add'} className="btn btn-default">Add product
        </Link>
        <ProductList>
          {this.showProductList(products)}
        </ProductList>
      </div>
    )
  }

  componentDidMount() {
    CallApi("products","GET",null).then(res=>{
      this.setState({
        products: res.data
      })
    })
  }

  onDelete = (id) => {
  let {products} = this.state;
   CallApi(`products/${id}`,"DELETE",null).then(res=>{
      if(res.status === 200) {
        let index = this.findIndex(products, id);
        products.splice(index, 1);
        this.setState({
          products
        })
      }
    })
  }

  findIndex=(products, id)=> {
    let index = -1;
    products.forEach((item, i)=>{
      if (item.id === id) {
        index = i;
      }
    })
    return index;
  }

  showProductList(products) {
    if (products.length > 0) {
      return(
      products.map((product, index)=> (
          <ProductItem key={index}
                        product={product}
                        index={index}
                        onDelete={this.onDelete}
                        />
        )
      ))
    }
  }
}

const mapStateToProps=(state)=>{
  return {
    products: state.products
  }
}

export default connect(mapStateToProps, null)(ProductListPage);
