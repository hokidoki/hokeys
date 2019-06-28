import React, { Component } from 'react'
import { Menu,Button,Icon } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

 class ArticleListHeader extends Component {
  state = { activeItem: 'closest' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  goToWriteArticle =()=>{
    this.props.history.push('/agora/addArticle')
  }

  render() {
    const { activeItem } = this.state

    return (
      <Menu text id="articleListHeader">
        <Menu.Item header>정렬 기준</Menu.Item>
        <Menu.Item
          name='최신순'
          active={activeItem === '최신순'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='조회순'
          active={activeItem === '조회순'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='공감순'
          active={activeItem === '공감순'}
          onClick={this.handleItemClick}
        />
        <Button secondary id="writeArticleButton" onClick={this.goToWriteArticle}><Icon name="write square"/>글쓰기</Button>
      </Menu>
    )
  }
}

export default connect(null,null)(withRouter(ArticleListHeader))