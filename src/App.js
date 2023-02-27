import './App.css';
import {Route} from 'react-router-dom';
import React, {Component} from 'react';
import Home from './pages/Home'

export default class App extends Component {
  renderMainRoutes(){
    return(
      <>
      <Route
        exact
        path='/'
        component={Home}
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
