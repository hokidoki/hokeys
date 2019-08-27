import React, { Component } from 'react'

import Editor from '../../component/common/textEditor';
import Notice from '../../component/common/Notice'


class AddArticlePage extends Component {
    
    
    render() {
        const { match } =this.props;
        return (
            <div className="addArticlePage">
                <Notice></Notice>
                <Editor params={match.params}></Editor>                    
            </div>
        )
    }
}

export default AddArticlePage
