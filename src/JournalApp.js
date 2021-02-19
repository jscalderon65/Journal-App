import React from "react";
import AppRouter from "./Components/Routers/AppRouter";
import {Provider} from 'react-redux'
import { Store } from "./Redux/Store";
const JournalApp = () => {
  return (
    <Provider store={Store}>
      <AppRouter />
    </Provider>
  )
};

export default JournalApp;
