import React, { Component } from 'react';
import { PostWrapper, RouteLink, PostButton, PostTitle } from 'components/Post';
import axios from 'axios';

class View extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: ''
    }

    const urlParams = new URLSearchParams(window.location.search);
    this.param = urlParams.get('id');
  }

  componentDidMount() {
    try {
      axios.get('/api/posts/' + this.param)
        .then(res => {

          console.log(res);
          this.setState({
            article: res.data
          })
        })
        .catch(err => {
          console.log(err);
        });

    } catch (err) {
      console.log(err);
    }
  }

  render() {

    const { article } = this.state;

    let articleList;

    if(article !== undefined && article.blocks !== undefined) {
      articleList = article.blocks.map(
        (block, index) => {
          switch (block.type) {
            case 'paragraph':
              return <p key={index}>{block.content}</p>;
            default:
              break;
          }

          return true;
        }
      )
    }

    return (
      <PostWrapper>
        <RouteLink to={`/post/edit?id=${article.id}`}>수정</RouteLink>
        <RouteLink to="/post/delete">삭제</RouteLink>
        <article>
          <h3>{this.state.article.title}</h3>
          {articleList}
        </article>
      </PostWrapper>
    );
  }
}

export default View;
