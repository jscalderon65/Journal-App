import { types } from "../Types/Types";
import  {startLoading,finishLoading} from './ui'
import { firebase } from "../../Firebase/FirebaseConfig";
import { message } from "antd";
import {notesLogoutCleaning} from './notes'
import "antd/dist/antd.css";
const { success, error } = message;

const login = (uid, displayName, isLoading=false) => ({
  type: types.login,
  payload: {
    uid,
    displayName,
    isLoading
  },
});
const logout = () => ({
  type: types.logout
});

const FirebaseLogOut = ()=>{
    return (dispatch)=>{
      firebase.auth().signOut().then(()=>{
        success("Session has ended",4);
        dispatch(logout());
        dispatch(notesLogoutCleaning());
      }).catch((error)=>error(error,5))
    }
}

const EmailPasswordRegister = (email, password, name) => {
  return (dispatch) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async({ user }) => {
        await user.updateProfile({displayName: name});
        dispatch(login(user.uid, user.displayName, false));
        success(`${user.displayName} signed up`, 4);
      })
      .catch(({ message: errorMessage }) => {
        error(errorMessage, 5);
      });
  };
};

const LoginEmailPassword = (email, password) => {
  return (dispatch) => {
    dispatch(startLoading());
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        success(`${user.displayName} logged in`, 4);
        dispatch(login(user.uid, user.displayName));
        dispatch(finishLoading());
      })
      .catch(({ message: errorMessage }) => {
        error(errorMessage, 5);
        dispatch(finishLoading());
      });
  };
};

const GoogleAuth = (dispatch) => {
  let provider_Google = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider_Google)
    .then(({ user }) => {
      success(`${user.displayName} logged in`, 4);
      dispatch(login(user.uid, user.displayName));
    })
    .catch(({ message: errorMessage }) => {
      error(errorMessage, 5);
    });
};

export {login,FirebaseLogOut,GoogleAuth, EmailPasswordRegister, LoginEmailPassword};
