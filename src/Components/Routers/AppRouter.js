import React from 'react'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import JournalScreen from '../Journal/JournalScreen';
import AuthRouter from './AuthRouter'
const AppRouter = () => {
    return (
        <Router>
        <div>
            <Switch>
                <Route path="/auth" component={AuthRouter} />
                <Route exact path="/" component={JournalScreen} />
                <Redirect to="/auth/login" />
            </Switch>
        </div>
        </Router>
    )
}

export default AppRouter
