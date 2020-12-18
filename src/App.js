import React, { Component } from 'react'
import './App.scss';
import Button from './components/button/index';
import ListItem from './components/listItem/index';
import {connect} from 'react-redux';
import {fetchPosts} from './redux/actions/index';
import Header from './components/Header/index';
import Headline from './components/headline/index';

// const tempArr = [{
//   fName:"Joe",
//   lName:"Biden",
//   email:'joebiden@gmail.com',
//   age:68,
//   onlineStatus:true
// }]

class App extends Component {
  constructor(props){
    super(props);
    this.fetch=this.fetch.bind(this)
  }

fetch(){
  this.props.fetchPosts();
}

  render() {
    const posts=this.props.posts;

    const configButton = {
      buttontext:'Get Posts',
      emitEvent:this.fetch
    }
    return (
      <div className='App' data-test='appcomponent'>
        <Header />
        <section className="headline">
        <Headline header="Posts" desc="click the button to render posts"/>
        <Button {...configButton} />
        {
        posts.length > 0 &&
        <div>
          {posts.map((post, index)=>{
            const {title, body}=post;
            const configListItem={
              title,
              desc:body
            }
            return (
              <ListItem key={index} {...configListItem} />
            )
          })}
        </div>

        }
        </section>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    posts:state.postReducer
  }
}

export default connect (mapStateToProps, {fetchPosts})(App);
