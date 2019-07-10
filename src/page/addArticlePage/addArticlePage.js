import React, { Component } from 'react'
import Editor from '../../component/common/textEditor';
import Notice from '../../component/common/Notice'
import { Button } from 'semantic-ui-react'

class AddArticlePage extends Component {
    render() {
        return (
            <div className="addArticlePage">
                <Notice></Notice>
                <Editor></Editor>                    
                <Button fluid >글쓰기</Button>
            </div>
        )
    }
}

export default AddArticlePage
