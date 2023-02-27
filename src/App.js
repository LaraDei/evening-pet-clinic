import './App.css';
import {Route} from 'react-router-dom';
import React, {Component} from 'react';

export default class App extends Component {
  renderMainRoutes(){
    return(
      <>
      <Route
        exact
        path='/'
        component={}
      />
      </>
    )
  }
render(){
  return(
    <div className="App">
      <Nav/>
      <main className="app-main">
          {this.renderMainRoutes()}
      </main>
    </div>
  )
}
}

