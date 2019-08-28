import ReactQuill from 'react-quill';
import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom'
import * as articleActions from '../../reducer/Article/actions'

import styeld from 'styled-components';
import { Button } from 'semantic-ui-react';
import '../../style/editor.css'
import { bindActionCreators } from 'redux';


const TitleDiv = styeld.div`
  width : 100%;
  height : 3rem;
  font-size : 1.5 rem;
  border-bottom : 2px solid gray;
  margin-bottom : 5px; 
`

const Title = styeld.input`
  background-color : none;
  border : none;
  margin-left : 10px;
  width : 80%;
  outline : none;
  font-size : 1.5remO;
`

function imageHandleChange (){
  const input = document.createElement('input');
  input.setAttribute('type', 'file');
  input.setAttribute('accept', 'image/*');
  input.click();
  input.onchange = function() {
    const file = input.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () =>{
      console.log(reader.result)
      const cursorPosition = this.quill.getSelection().index;
      this.quill.insertEmbed(cursorPosition, 'image', reader.result)
    }
  }.bind(this)
}



class Editor extends React.Component {
 
  state = { 
    title : '',
    editorHtml: '', 
    theme : 'snow',
    image : [],
    mode : "add"
  }
  componentDidMount(){
    const { doc } = this.props;
    console.log(doc);
    if(doc){
      this.setState({
        title : doc.title,
        editorHtml : doc.content,
        theme : 'snow',
        image : [],
        mode : "modify"
      })
    }
  }
  handleChange = html => {
    this.setState({ editorHtml: html });
  }

  titleHandleChange = e => {
    const title = e.target.value;
    this.setState({ title: title })
  }

  handleThemeChange(newTheme) {
    if (newTheme === "core") newTheme = null;
    this.setState({ theme: newTheme })
  }

  clickWriteButton = e => {
    const { params,doc } = this.props;
    const { title, editorHtml,mode } = this.state;
    const whereCollection = params.name.replace(":", "");

    if (title.length < 3) {
      alert("제목은 3자 이상 작성해야합니다.");
      return;
    }
    if (editorHtml.length < 10) {
      alert("본문은 10자 이상 작성해야합니다.");
      return;
    }

    if(mode === "modify"){
      this.props.updateArticle(whereCollection,doc.id,title,editorHtml);
    }else if(mode === "add"){
      this.props.addArticle(whereCollection, title, editorHtml, null);
    }
  }

  render() {
    console.log(this.state)
    return (
      <div>
        {!this.props.account ? <Redirect to="/"/> : null}
        <TitleDiv>
          <Title placeholder="제목을 입력하세요" maxLength="40" value={this.state.title} onChange={this.titleHandleChange} />
        </TitleDiv>
        <ReactQuill
          theme={this.state.theme}
          onChange={this.handleChange}
          value={this.state.editorHtml}
          modules={Editor.modules}
          formats={Editor.formats}
          bounds={'.app'}
          placeholder={this.props.placeholder}
        />
        <Button onClick={this.clickWriteButton}>쓰기</Button>
      </div>
    )
  }
}


Editor.modules = {
    toolbar: {
      container : [
        [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
        [{size: []}],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'}, 
         {'indent': '-1'}, {'indent': '+1'}],
        ['link', 'image', 'video'],
        ['clean']]
    ,handlers :{
      image : imageHandleChange
    }},clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  }
  /* 
   * Quill editor formats
   * See https://quilljs.com/docs/formats/
   */

  Editor.formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video'
  ]
  
  /* 
   * PropType validation
   */
  Editor.propTypes = {
    placeholder: PropTypes.string,
  }


/* 
 * PropType validation
 */
Editor.propTypes = {
  placeholder: PropTypes.string,
}

const mapStateToProps = (state) =>{
  return {
    account : state.auth.user,
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    addArticle : bindActionCreators(articleActions.addArticle,dispatch),
    updateArticle : bindActionCreators(articleActions.updateArticle,dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Editor));