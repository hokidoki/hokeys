import React, { Component } from 'react';
import styled from 'styled-components';


const StyledDivContainner = styled.div`
    height : 100px;
    border : 1px solid black;
    box-sizing : border-box;
    padding-left : 10px;
    margin-top : 10px;
    display : flex;
    flex-direction : column;
`

const StyledDivViews = styled.div`
    border : none;
    background-color : gray;
    box-sizing : border-box;
    height : 98px;
    width : 5%;
    font-size : 3rem;
    text-align : center;
    line-height: 98px;
`
export default class ArticleListItem extends Component {

    static defaultProps = {
        title : "title for test",
        createdAt : "2019-10-20",
        likeCnt : 0,
        commentCnt : 0,
        file : "",
        image : "",
        views : 0
    }
    render() {
        return (
            <StyledDivContainner>
               <StyledDivViews>
                    {this.props.views}
               </StyledDivViews>
            </StyledDivContainner>
        )
    }
}
