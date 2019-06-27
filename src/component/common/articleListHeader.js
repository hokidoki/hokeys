import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class ArticleListHeader extends Component {
  state = { activeItem: 'closest' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

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
      </Menu>
    )
  }
}