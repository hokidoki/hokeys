import React, { Component } from 'react'
import { Menu,Button,Icon } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import {login_modal_open} from '../../reducer/loginBoxReducer'


 class ArticleListHeader extends Component {
  state = { activeItem: 'closest' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  goToWriteArticle =()=>{
    const { params,account,openModal } = this.props;
    if(account){
      this.props.history.push(`/Article/:${params.name}?mod="add"`);
    }else{
      openModal();
    }
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

const mapStatetoProps = (state)=>{
  return {
    account : state.auth.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      openModal: () => dispatch(login_modal_open())
  }
}

export default connect(mapStatetoProps,mapDispatchToProps)(withRouter(ArticleListHeader))