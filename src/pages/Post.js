import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { List, Edit, View } from 'containers/Post';

class Post extends Component {
  
  render() {
    return (
      <div>
        <Route path="/post/list" component={List}/>
        <Route path="/post/edit" component={Edit}/>
        <Route path="/post/view" component={View}/>
      </div>
    );
  }
}

export default Post;
