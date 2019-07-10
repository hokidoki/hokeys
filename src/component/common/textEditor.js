import ReactQuill from 'react-quill';
import React from 'react'
import PropTypes from 'prop-types'
// import ReactDOM from 'react-dom';
import '../../style/editor.css'
import { Button } from 'semantic-ui-react';
import { bindActionCreators } from 'redux'; 
import { connect } from 'react-redux';

import * as articleActions from '../../reducer/Article/actions';

class Editor extends React.Component {
  constructor (props) {
    super(props)
    this.state = { editorHtml: '', theme: 'snow' }
    this.handleChange = this.handleChange.bind(this)
  }
  
  handleChange (html) {
  	this.setState({ editorHtml: html });
  }
  
  handleThemeChange (newTheme) {
    if (newTheme === "core") newTheme = null;
    this.setState({ theme: newTheme })
  }

  onAddArticle = e => {

    const contents = this.state.editorHtml;

    this.props.articleActions.addArticle({ contents,file : null });
  }

  render () {
    return (
      <div>
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
    }
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