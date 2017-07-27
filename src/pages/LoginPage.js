import React from 'react';

import './page_styles/LoginPage.css';

class LoginPage extends React.Component {
	render () {
		return (
			<div className="component-LoginPage">
				<div className='columns'>
					<div className='central-column column is-one-third'>
						<div className="logo">
							<i id='logo' className="fa fa-h-square" aria-hidden="true"></i>
						</div>
						<div id='users-login-details'>
							<div className="field">
								<input className="input" type="username" placeholder="Username" />
							</div>
							<div className="field">
								<p className="control has-icons-left">
									<input className="input" type="password" placeholder="Password" />
								</p>
							</div>
							<div className="field">
								<p className="control">
									<button id='login-button' className="button is-success">
										Login
							</button>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default LoginPage;

