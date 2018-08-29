import React from 'react';
import {NavLink, Route, Switch} from 'react-router-dom'
import Login from './Login';
import Signup from './Signup';
const Auth = () => {
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/login">Login</NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/signup">Signup</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
            {/* These are nested routes */}
            <div>
                <Switch>
                    <Route path="/login" component={Login}/>   
                    <Route path="/signup" component={Signup}/>
                    <Route path="/auth" component={Login}/>
                </Switch>
            </div>
        </React.Fragment>
    );
};

export default Auth;