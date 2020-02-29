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

    await this.editor.save().then((outputData) => {
      console.log(outputData);
      const { storedTitle } = this.state;
      const { history } = this.props;

      const blocks = [];

      outputData.blocks.forEach(el => {

        const item = {
          type: el.type,
          content: el.data.text,
          created_on: new Date().toISOString(),
          updated_on: new Date().toISOString()
        }
        blocks.push(item);
      });

      const data = {
        title: storedTitle,
        description: '',
        blocks: blocks
      }

      console.log(data);

      axios.post('/api/posts/', data).then((e) => {
        console.log(e);
        history.push('/post/list');

      }).catch((e) => {
        console.log(e);
      });

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
