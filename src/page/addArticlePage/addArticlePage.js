import React, { Component } from 'react'

import Editor from '../../component/common/textEditor';
import Notice from '../../component/common/Notice'

import { addArticle } from '../../reducer/Article/actions';

class AddArticlePage extends Component {
    
    addArticle = e=>{
        addArticle();
    }
    render() {
        return (
            <div className="addArticlePage">
                <Notice></Notice>
                <Editor></Editor>                    
            </div>
        )
    }
}

export default AddArticlePage
