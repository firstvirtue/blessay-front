import React, { Component } from 'react';
import { PostWrapper, RouteLink, PostButton, PostTitle } from 'components/Post';
import EditorJS from '@editorjs/editorjs';
import axios from 'axios';

class Edit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      storedTitle: ''
    }

    this.editor = new EditorJS({
      holderId: 'container',
      // autofocus: true,
    });
  }

  handleSave = async () => {
    // this.editor.focus();

    this.editor.save().then((outputData) => {
      // console.log(outputData);
      console.log(this.state);
      // axios.post('/api/posts/', )
    }).catch((e) => {
      console.log(e);
    });
  }

  handleChange = (e) => {
    // console.log(e.target.textContent);
    
    // TODO: placeholder
    this.setState({ storedTitle: e.target.textContent });
  }

  render() {
    const { handleSave, handleChange } = this;
    const { title } = this.state;

    console.log(title);

    return (
      <PostWrapper>
        <PostButton onClick={handleSave}>저장하기</PostButton>
        <RouteLink to="/post/list">취소하기</RouteLink>
        <PostTitle html={title} onChange={handleChange}></PostTitle>
        <div id="container"></div>
      </PostWrapper>
    );
  }
}

export default Edit;
