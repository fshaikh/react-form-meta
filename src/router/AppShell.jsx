import React from 'react';
import {NavLink} from 'react-router-dom'
const AppShell = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                      <NavLink className="nav-link"to="/auth">Auth</NavLink>
                    </li>
                    <li className="nav-item active">
                      <NavLink className="nav-link"to="/settings">Settings</NavLink>
                    </li>
                  </ul>
              </div>
          </nav>
    );
};

export default AppShell;