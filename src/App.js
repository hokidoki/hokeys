import Navigation from './component/navigation'
import React, { Component } from 'react'
import Mainpage from './page/mainpage'
import { connect } from 'react-redux'
import ModalPortal from './modal/loginModalPotal'
import LoginModal from './component/login_modal'
class App extends Component {
  
  render() {
   
    return (
      <div>
         {this.props.modal? 
         <ModalPortal>
            <LoginModal></LoginModal>
         </ModalPortal>
        :null}
        <Navigation></Navigation>
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