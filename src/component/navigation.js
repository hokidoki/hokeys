import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Header, Menu } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { login_modal_open } from '../reducer/loginBoxReducer'
import '../style/navigation.css'
import LoginMenu from './loginComponent/loginMenu';
import CurrentMenu from './loginComponent/currentMenu'

class Navigation extends Component {

    state = {}

    handleItemClick = (name) => {
        this.setState({
             activeItem: name 
        })
    }
    goToHome = e=>{
        this.handleItemClick("home")
        this.props.history.push('/');
    }

    goToAgora = e =>{
        this.handleItemClick("agora")
<<<<<<< HEAD
        this.props.history.push('/community/agora');
=======
        this.props.history.push('/agora');
>>>>>>> master
        
    }

    goToWindow = e =>{
        this.handleItemClick("promotions")
<<<<<<< HEAD
        this.props.history.push('/community/window');
=======
        this.props.history.push('/');
>>>>>>> master
    }

    goToApple = e =>{
        this.handleItemClick("apple")
<<<<<<< HEAD
        this.props.history.push('/community/apple');
=======
        this.props.history.push('/');
>>>>>>> master
    }

    goToLinux= e =>{
        this.handleItemClick("linux")
<<<<<<< HEAD
        this.props.history.push('/community/linux');
=======
        this.props.history.push('/');
>>>>>>> master
    }

    goToAndroid = e =>{
        this.handleItemClick("android")
<<<<<<< HEAD
        this.props.history.push('/community/android');
=======
        this.props.history.push('/');
>>>>>>> master
    }

    goToIos = e =>{
        this.handleItemClick("ios")
<<<<<<< HEAD
        this.props.history.push('/community/ios');
=======
        this.props.history.push('/');
>>>>>>> master
    }
    render() {
        const { activeItem } = this.state;


        return (
            <Menu vertical className="navibar">
                <Menu.Item id="Home"
                    name='home'
                    active={activeItem === 'home'}
                    onClick={this.goToHome}
                >
                <Header as='h1' >Hokeys</Header>

                </Menu.Item>
                {this.props.user ? <CurrentMenu user={this.state.user}/> : <LoginMenu openModal={this.props.openModal}/>
                }

                <Menu.Item name='agora' active={activeItem === 'agora'} onClick={this.goToAgora}>
                    <i className="fas fa-coins menu_logo"></i>
                </Menu.Item>
                <Menu.Item name='window' active={activeItem === 'window'} onClick={this.goToWindow}>
                    <i className="fab fa-windows menu_logo"></i>
                </Menu.Item>
                <Menu.Item name='apple' active={activeItem === 'apple'} onClick={this.goToApple}>
                    <i className="fab fa-apple menu_logo"></i>
                </Menu.Item>

                <Menu.Item name='linux' active={activeItem === 'linux'} onClick={this.goToLinux}>
                    <i className="fab fa-linux menu_logo"></i>
                </Menu.Item>
                <Menu.Item name='android' active={activeItem === 'android'} onClick={this.goToAndroid}>
                    <i className="fab fa-android menu_logo"></i>
                </Menu.Item>
                <Menu.Item name='ios' active={activeItem === 'ios'} onClick={this.goToIos}>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navigation))