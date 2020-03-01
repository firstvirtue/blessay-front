import React, { Component } from 'react';
import { PostWrapper, RouteLink, PostButton, PostTitle } from 'components/Post';
import EditorJS from '@editorjs/editorjs';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Edit extends Component {
  constructor(props) {
    super(props);

    const urlParams = new URLSearchParams(window.location.search);

    this.state = {
      title: '',
      storedTitle: '',
      param: urlParams.get('id')
    }

    // console.log(this.state);
  }

  componentDidMount() {

    const { param } = this.state;
    
    if(param) {
      axios.get('/api/posts/' + param)
        .then(res => {

          // console.log(res.data);
          this.setState({
            title: res.data.title,
            storedTitle: res.data.title
          });

          const data = {
            blocks: []
          }

          res.data.blocks.forEach(el => {
            
            let item = {
              type: el.type,
              data: {
                text: el.content
              }
            };
            
            data.blocks.push(item);
          })

          this.editor = new EditorJS({
            holderId: 'container',
            // autofocus: true,
            data: data
          });
        })
        .catch(err => {
          console.log(err);
        })
    } else {
      this.editor = new EditorJS({
        holderId: 'container',
        // autofocus: true,
      });
    }
  }

  notify = (message) => toast(message.toString());

  handleSave = async () => {
    
    // this.editor.focus();
    const { notify } = this;
    const { param } = this.state;

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

      if(param) {
        axios.patch('/api/posts/' + param, data).then((e) => {
          history.push('/post/list');
  
        }).catch((e) => {
          console.log(e);
          notify('연결에 실패했습니다.');
        });
      } else {
        axios.post('/api/posts/', data).then((e) => {
          history.push('/post/list');
  
        }).catch((e) => {
          console.log(e);
          notify('연결에 실패했습니다.');
        });
      }

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
        <ToastContainer/>
      </PostWrapper>
    );
  }
}

export default Edit;
