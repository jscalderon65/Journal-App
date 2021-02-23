import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../Redux/Actions/auth";
import { useFirebaseUser } from "my-customhook-collection";
import { firebase } from "../../Firebase/FirebaseConfig";
import { loadNotes } from "../../Firebase/FirebaseOperations";
import { setNotes } from '../../Redux/Actions/notes';
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import JournalScreen from "../Journal/JournalScreen";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
import { Spin } from "antd";

import "antd/dist/antd.css";
import AuthRouter from "./AuthRouter";
const AppRouter = () => {
  const [checking, setCheking] = useState(true);
  const dispatch = useDispatch();
  const [userInfo, isOn] = useFirebaseUser(firebase);
  useEffect(() => {
    if (userInfo?.uid) {
      dispatch(login(userInfo.uid, userInfo.displayName));
      const notes = loadNotes(userInfo.uid);      
      notes.then(note=>dispatch(setNotes(note))); 
    }
    setCheking(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo]);
  if (checking) {
    return (
      <div className="journal__spin">
        <Spin size="large" />
      </div>
    );
  }
  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            path="/auth"
            component={AuthRouter}
            isAuthenticated={isOn}
          />

          <PrivateRoute
            exact
            isAuthenticated={isOn}
            path="/"
            component={JournalScreen}
          />

          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
