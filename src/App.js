import React, { Component } from 'react'
import './App.scss';
import Header from './components/Header/index';
import Headline from './components/headline/index';

const tempArr = [{
  fName:"Joe",
  lName:"Biden",
  email:'joebiden@gmail.com',
  age:68,
  onlineStatus:true
}]

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
    <section className="headline">
    <Headline header="Posts" desc="click the button to render posts" tempArr={tempArr}/>
    </section>
      </div>
    )
  }
}

