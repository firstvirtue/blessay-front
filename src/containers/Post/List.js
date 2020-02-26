import React, { Component } from 'react';
import axios from 'axios';

class List extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      error: null,
      items: []
    }
  }

  componentDidMount() {
    try {
      axios.get('/api/posts')
        .then(res => {
          console.log(res);
          this.setState({
            items: res.data
          })
        })
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const { items } = this.state;
    let articleList; 
    articleList = items.map(
      (article, index) => (
        <li>
          {article.id}
        </li>
      )
    )
    return (
      <ul>
        {articleList}
      </ul>
    );
  }
}

export default List;
