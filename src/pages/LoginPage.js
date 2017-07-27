import React from 'react';

import './page_styles/LoginPage.css';

class LoginPage extends React.Component {
	render() {
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
									<a id='login-button' className="button is-success" href="http://localhost:9000/user/1">
										Login
									</a>
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

