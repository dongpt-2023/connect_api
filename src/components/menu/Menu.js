import React, { Component } from 'react';
import {
  Route,
  Link
} from "react-router-dom";

const MenuLink = ({label, to, activeOnlyWhenExact}) => {
  return(
    <Route path = {to} exact = {activeOnlyWhenExact} children = {({match}) => {
      var active = match ? "active" : "";
      return (
        <li className={active}>
          <Link to={to}> {label} </Link>
         </li>
      )
    }}
    />
  )
}

const menus = [
  {
    name: "Home",
    to: "/",
    exact: true
  },
  {
    name: "List Product",
    to: "/product-list",
    exact: false
  }
]

class Menu extends Component {
  render() {
    return (
      <div className="navbar navbar-default">
          <a className="navbar-brand">Call API</a>
          <ul className="nav navbar-nav">
            {this.show_menus(menus)}
          </ul>
      </div>
    )
  }

  show_menus=(menus)=>{
    if(menus.length > 0) {
      return (
        menus.map((item, index)=>(
          <MenuLink
            key={index}
            label={item.name}
            to={item.to}
            activeOnlyWhenExact={item.exact}
          />
        )
      ))
    }
  }
}

export default Menu;
