import React from 'react';
import {Router, Route, Switch,} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../components/DashboardPage';
import LoginPage from '../components/LoginPage';
import NotFoundPage from '../components/NotFound';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import EditNotePage from '../components/EditNote';

export const history = createHistory();


const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
            <PublicRoute path="/" component={LoginPage} exact={true}/>
            <PrivateRoute path="/dashboard" component={DashboardPage}/>
            <PrivateRoute path="/edit/:id" component={EditNotePage}/>
            <PrivateRoute component={NotFoundPage}/>
            </Switch>
        </div>
    </Router>
);

export default AppRouter;