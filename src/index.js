import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import './App.scss';
import Header from './components/Header/index';
import Headline from './components/headline/index';

ReactDOM.render(
  <div className="App">
    <Header />
    <section className="headline">
    <Headline header="Posts" desc="click the button to render posts"/>
    </section>
  </div>
,  document.getElementById('root')
);
