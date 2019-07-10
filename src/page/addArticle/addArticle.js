import React, { Component } from 'react'
import Editor from '../../component/common/textEditor'
import Header from '../../component/common/header'
import { Button } from 'semantic-ui-react'

export default class addArticle extends Component {
    render() {
        return (
            <div className="board">
                <Header/>
                <Editor/>
                <div>
                    <Button>전송하기</Button>
                </div>
            </div>
        )
    }
}
