import firebase from 'firebase'

export function signWithGoogleAPI(){
    var provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider);
}

export function signWithFacebookAPI(){
    var provider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(provider)
}