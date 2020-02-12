import React, { Component } from 'react';
import Menu from './components/menu/Menu';
import './App.css';
import routes from './routes';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';

import {createStore} from 'redux';
import appReducer from './reducers/index';
import {Provider } from 'react-redux';

const store = createStore(appReducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Menu/>
            <div className="container">
                <div className="row ">
                  {this.showContentMenus(routes)}
                </div>
            </div>
          </div>
        </Router>
      </Provider>
    )
  }
  showContentMenus(routes) {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((item, index)=>{
        return (
          <Route
            key={index}
            path={item.path}
            exact={item.exact}
            component = {item.main}
          />
        )
      })
    }

    return <Switch>{result}</Switch>
  }
}

export default App;
