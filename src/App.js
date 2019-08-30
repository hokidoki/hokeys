import Navigation from './component/navigation';
import React, { Component } from 'react';
import Mainpage from './page/mainpage';
import { connect } from 'react-redux';
import ModalPortal from './modal/loginModalPotal';
import LoginModal from './component/login_modal';
// import { bindActionCreators } from 'redux';
// import firebase from 'firebase'
// import * as authActions from './reducer/auth/actions'

class App extends Component {
  
  componentDidMount(){
    console.log(this.props)
  }

  
  render() {
    return (
      <div className="containner">
         {this.props.modal? 
         <ModalPortal>
            <LoginModal></LoginModal>
         </ModalPortal>
        :null}
        <Navigation></Navigation>
        {/* <Route path="/:where/:in" component={Navigation}/> */}
        <Mainpage></Mainpage>
      </div>
    )
  }
}

const mapStateToprops = (state) => {
  return {
    modal : state.loginModal.isOpen
  }
}

export default connect(mapStateToprops,null)(App)