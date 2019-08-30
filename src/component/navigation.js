import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Header, Menu } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { login_modal_open } from '../reducer/loginBoxReducer'
import * as actions from '../reducer/Article/actions'
import '../style/navigation.css'
import LoginMenu from './loginComponent/loginMenu';
import CurrentMenu from './loginComponent/currentMenu'

class Navigation extends Component {

    state = {}

    componentDidMount(){
        const { location } = this.props
        const path = location.pathname.split("/");

        if(path[1] === "community"){
            this.setState({
                activeItem: path[2]
            })
        }else{
            this.setState({
                activeItem : "home"
            })
        }
    }
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
        this.props.goToCommunity("agora",null,100);
        // this.props.history.push('/community/agora');        
    }

    goToWindow = e =>{
        this.handleItemClick("window")
        this.props.goToCommunity("window",null,100);
        // this.props.history.push('/community/window');
    }

    goToApple = e =>{
        this.handleItemClick("apple")
        this.props.goToCommunity("apple",null,100);
    }

    goToLinux= e =>{
        this.handleItemClick("linux")
        this.props.goToCommunity("linux",null,100);
    }

    goToAndroid = e =>{
        this.handleItemClick("android")
        this.props.goToCommunity("andriod",null,100);
    }

    goToIos = e =>{
        this.handleItemClick("ios")
        this.props.goToCommunity("ios",null,100);
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
        openModal: () => dispatch(login_modal_open()),
        goToCommunity : (collection,lastItem,count)=> dispatch(actions.goToCommunity(collection,lastItem,count))
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.auth.user
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navigation))