import React, { Component } from 'react';
import {Link} from "react-router-dom";

import ProductList from './../../components/productList/ProductList';
import ProductItem from './../../components/productItem/ProductItem';
import CallApi from './../../utils/apiCaller';

class ProductActionPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: "",
      txtName: "",
      txtPrice:"",
      chkbStatus: ""
    }
  }

  componentDidMount() {
    let {match} = this.props;
    CallApi(`products/${match.params.id}`, "GET", null).then(res=>{
      let data = res.data;
      this.setState({
        id: data.id,
        txtName: data.name,
        txtPrice: data.price,
        chkbStatus: data.status
      })
    })
  }

  render() {
    let {txtName, txtPrice,chkbStatus} = this.state;
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
       <form onSubmit={this.onSubmit}>
         <div class="form-group">
           <label>Name: </label>
           <input type="text"
                  class="form-control"
                  name="txtName"
                  value={txtName}
                  onChange={this.onChange}
                  />
         </div>
         <div class="form-group">
           <label>Price: </label>
           <input type="number"
                  class="form-control"
                  name="txtPrice"
                  value={txtPrice}
                  onChange={this.onChange}
                  />
         </div>

         <div class="form-group">
           <label>Status: </label>
         </div>
         <div class="checkbox">
           <label>
             <input type="checkbox"
                    name="chkbStatus"
                    value="chkbStatus"
                    onChange={this.onChange}
                    checked={chkbStatus}
                    />
             Con hang
           </label>
         </div>
         <button type="submit" class="btn btn-primary">Luu lai</button>
         <Link to="/product-list" class="btn btn-warning">Back</Link>
       </form>
      </div>
    )
  }

  onChange = (e) =>{
    let name = e.target.name;
    let value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    this.setState({
      [name]: value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    let {id, txtName, txtPrice,chkbStatus} = this.state;
    let {history} = this.props;
    if(id){
      CallApi(`products/${id}`, "PUT", {name: txtName, price: txtPrice, status: chkbStatus }).then(res=>{
        history.goBack();
      })

    } else {
      CallApi("products", "POST", {name: txtName, price: txtPrice, status: chkbStatus }).then(res=>{
        history.goBack();
      })
    }
  }
}

export default ProductActionPage;
