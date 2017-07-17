import React from 'react';

import './page_styles/LoginPage.css'

class LoginPage extends React.Component {
    render () {
        return (
            <div className="component-LoginPage">
                <div className="logo">
                    <i id='logo' className="fa fa-h-square" aria-hidden="true"></i>
                </div>
                <div id='users-login-details'>

                <form className='login-form'>
                    <input className='username' placeholder="username"/>
                </form>
                    <input className='password' placeholder="password"/>
                </div>
            </div>
        );
    }
}

export default LoginPage;

