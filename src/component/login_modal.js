import React, { Component } from 'react';
import '../style/loginModal.css';
import { login_modal_close } from '../reducer/loginBoxReducer'
import { connect } from 'react-redux'
import { Button, Icon } from 'semantic-ui-react'
import  * as authActions from '../reducer/auth/actions'
import { bindActionCreators } from 'redux'


class LoginModal extends Component {
    onGoogleLogin = e=>{
        console.log("googleLogin");
        this.props.authActions.signInWithGoogle();
    }
    onFacebookLogin = e=>{
        console.log("facebook login");
        this.props.authActions.signInWithFacebook();
    }

    
    render() {
        console.log(this.props.authActions);
        return (
            <div className="MyModal">
                <div className="content">
                <Button.Group widths='10'>
                    <Button color='google plus' onClick={this.onGoogleLogin}>
                        <Icon name='google plus' /> Google Login
                     </Button>
                    <Button color='facebook' onClick={this.onFacebookLogin}>
                        <Icon name='facebook' /> Facebook Login
                    </Button>
                    <Button onClick={this.props.close_modal}>
                         닫기
                    </Button>
                    </Button.Group>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        authActions : bindActionCreators(authActions,dispatch),
        close_modal: () => dispatch(login_modal_close())
    }
}
export default connect(null, mapDispatchToProps)(LoginModal)