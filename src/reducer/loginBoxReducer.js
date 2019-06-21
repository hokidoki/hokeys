const LOGIN_MODAL_OPEN = "LOGIN_MODAL_OPEN";
const LOGIN_MODAL_CLOSE = "LOGIN_MODAL_CLOSE";

export function login_modal_open(){
    return {
        type : LOGIN_MODAL_OPEN
    }
}

export function login_modal_close(){
    return {
        type : LOGIN_MODAL_CLOSE
    }
}

const initialState = {
    isOpen : false
}

export default function loginModalReducer(state=initialState,action){
    switch(action.type){
        case LOGIN_MODAL_OPEN:
            return Object.assign({},state,{
                isOpen : true
            })
        case LOGIN_MODAL_CLOSE:
            return Object.assign({},state,{
                isOpen : false
            })
        default :
            return state
    }
}