import ReactQuill from 'react-quill';
import React from 'react'
import PropTypes from 'prop-types'

import { bindActionCreators } from 'redux'; 
import { connect } from 'react-redux';
import * as articleActions from '../../reducer/Article/actions';

import styeld from 'styled-components';
import { Button } from 'semantic-ui-react';
import '../../style/editor.css'


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
  font-size : 1.5rem;
`

class Editor extends React.Component {
 
  state = { 
    title : '',
    editorHtml: '', 
    theme: 'snow' 
  }

  handleChange = html => {
  	this.setState({ editorHtml: html });
  }

  titleHandleChange = e => {
    const title = e.target.value;
    this.setState({ title : title  })
  }
  
  handleThemeChange (newTheme) {
    if (newTheme === "core") newTheme = null;
    this.setState({ theme: newTheme })
  }

  onAddArticle = e => {
    const { params } = this.props;
    const { title,editorHtml } = this.state;
    const whereCollection = params.name.replace(":" , "");
    
    if(title.length < 3){
      alert("제목은 3자 이상 작성해야합니다.");
      return;
    }
    if(editorHtml.length < 10){
      alert("본문은 10자 이상 작성해야합니다.");
      return;
    }

    this.props.articleActions.addArticle(whereCollection, title, editorHtml, null );
  }
  imageChange = ()=>{
    console.log("image")
  }
  render () {
    return (
      <div>
        <TitleDiv>
          <Title placeholder="제목을 입력하세요" maxLength="40" value={this.state.title} onChange={this.titleHandleChange}/>
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
         <Button onClick={this.onAddArticle}>글쓰기</Button>
       </div>
     )
  }
}


Editor.modules = {
    toolbar: [
      [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
      [{size: []}],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, 
       {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image', 'video'],
      ['clean']
    ],
    clipboard: {
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



  const mapDispatchToProps = (dispatch) => {
    return {
      articleActions : bindActionCreators(articleActions,dispatch),
    }
  }
  export default connect(null,mapDispatchToProps)(Editor);