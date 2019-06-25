import React, { Component } from 'react'
import { Header, Menu } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { login_modal_open } from '../reducer/loginBoxReducer'
import '../style/navigation.css'
import LoginMenu from './loginComponent/loginMenu';
import CurrentMenu from './loginComponent/currentMenu'

class Navigation extends Component {

    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state;
        // const { user } = this.props;
        console.log(this.props.user)

        return (
            <Menu vertical className="navibar">
                <Menu.Item
                    name='promotions'
                    active={activeItem === 'promotions'}
                    onClick={this.handleItemClick}
                >
                    <Header as='h1' >Hokeys</Header>

                </Menu.Item>
                {this.props.user ? <CurrentMenu user={this.state.user}/> : <LoginMenu openModal={this.props.openModal}/>
                }

                <Menu.Item name='agora' active={activeItem === 'agora'} onClick={this.handleItemClick}>
                    <i className="fas fa-coins menu_logo"></i>
                </Menu.Item>
                <Menu.Item name='window' active={activeItem === 'window'} onClick={this.handleItemClick}>
                    <i className="fab fa-windows menu_logo"></i>
                </Menu.Item>
                <Menu.Item name='apple' active={activeItem === 'apple'} onClick={this.handleItemClick}>
                    <i className="fab fa-apple menu_logo"></i>
                </Menu.Item>

                <Menu.Item name='linux' active={activeItem === 'linux'} onClick={this.handleItemClick}>
                    <i className="fab fa-linux menu_logo"></i>
                </Menu.Item>
                <Menu.Item name='android' active={activeItem === 'android'} onClick={this.handleItemClick}>
                    <i className="fab fa-android menu_logo"></i>
                </Menu.Item>
                <Menu.Item name='ios' active={activeItem === 'ios'} onClick={this.handleItemClick}>
                    <i className="fab fa-app-store-ios menu_logo"></i>
                </Menu.Item>
            </Menu>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        openModal: () => dispatch(login_modal_open())
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.auth.user
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)