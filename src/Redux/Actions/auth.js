import { types } from "../Types/Types";
import { firebase } from "../../Firebase/FirebaseConfig";
/* const LoginEmailPassword = (email, password) =>{
    return ()=>{

    }
} */
const GoogleAuth = (dispatch) => {
    let provider_Google = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider_Google)
      .then(({user}) => {
       dispatch(login(user.uid,user.displayName))
      })
      .catch((Error) => {
       console.log(Error)
      });
}

const login = (uid, displayName) => ({
  type: types.login,
  payload: {
    uid,
    displayName,
  },
});
export { login, GoogleAuth };
