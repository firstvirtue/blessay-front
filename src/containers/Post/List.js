import React, { Component } from 'react';
import axios from 'axios';
import { PostWrapper, RouteLink, PostLink } from 'components/Post';

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
        <li key={index}>
          <PostLink to={`/post/view?id=${article.id}`}>
            <h2>{article.title}</h2>
            {article.description}
          </PostLink>
        </li>
      )
    )

    return (
      <PostWrapper>
        <RouteLink to="/post/edit">글쓰기</RouteLink>
        <ul>
          {articleList}
        </ul>
      </PostWrapper>
    );
  }
}

export default List;
