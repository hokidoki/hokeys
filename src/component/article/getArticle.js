import React, { Component } from 'react';
import { connect } from 'react-redux';

class getArticle extends Component {
    render() {
        return (
            <div className="articleContainner">
                <div className="title">
                    제목
                </div>
                <div className="content">
                    컨텐츠
                </div>
            </div>
        )
    }
}

export default connect(null,null)(getArticle)
