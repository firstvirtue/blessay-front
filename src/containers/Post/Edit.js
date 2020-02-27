import React, { Component } from 'react';
import { PostWrapper, RouteLink, PostButton } from 'components/Post';
import EditorJS from '@editorjs/editorjs';

class Edit extends Component {
  constructor(props) {
    super(props);

    const editor = new EditorJS({
      holderId: 'container',
      autofocus: true,
    });
  }

  handleSave = async () => {
    alert(1);
  }

  render() {
    const { handleSave } = this;

    return (
      <PostWrapper>
        <PostButton onClick={handleSave}>저장하기</PostButton>
        <RouteLink to="/post/list">취소하기</RouteLink>
        <div id="container"></div>
      </PostWrapper>
    );
  }
}

export default Edit;
