import React from 'react';

import './component_styles/ProfileCard.css';

class ProfileCard extends React.Component {
	render () {
		return (
			<div className="component-ProfileCard">
					<img id='staff-image' src="https://drparivar.com/images/doctor-profile-pic.png" />
					<p>Katie Johnson</p>
					<p ><span className='staff-key'>Position:</span> Doctor</p>
					<p ><span className='staff-key'>Registered At:</span> St Marys Hospital</p>
					<p ><span className='staff-key'>Pager Number:</span> 609-412</p>
					<p ><span className='staff-key'>Registration Number:</span> GP782664382</p>
			</div>
		);
	}
}

export default ProfileCard;


